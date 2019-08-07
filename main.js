function toCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

 var getAllRecords = function() {
  $.getJSON('https://api.airtable.com/v0/appHBGb39oC7K8oOR/Table%201?api_key=keylGwWvapRxHapL6',
    function(airtable){
      var html = [];
      $.each(airtable.records, function(index, record) {
        var id = record.id;
        var brand = record.fields['Brand'];
        var type = record.fields['Type'];
        var pictures = record.fields['Pictures'];
        html.push(listView(id, brand, type, pictures));
      });
      $('.list-view').append(html);
    }
  );
}


var getOneRecord = function(id) {
  $.getJSON(`https://api.airtable.com/v0/appHBGb39oC7K8oOR/Table%201?api_key=keylGwWvapRxHapL6`,
    function(record){
      var html = [];
      var picture = record.fields['Brands'];
      var jobTitle = record.fields['Type'];
      var lowRate = record.fields['Color'];
      var highRate = record.fields['Pictures'];
      var avgRate = record.fields['Name'];
      var description = record.fields['Material'];
      var certificates = record.fields['Ogcost'];
      html.push(detailView(brands, type, color, pictures, name, material, ogcost, formattedString ));
      $('.detail-view').append(html);
    }
  );
}


var listView = function(id, picture, name, ogcost) {
  return `
    <div class="card border-dark" style="width: 18rem;">
    ${picture ? `<img src="${picture[0].url}">` : ``}
    <div class="card-body">
      <h2 class="card-title"><a href="index.html?id=${id}">${name}</h2></a>
      // <p class="card-text"><u>Average Annual Salary:</u><p> $${toCommas(avgRate*24)}</p>
      </div>
    </div>
  `;
}

function formattedString(value) {
  return value.split(",").join("<li>")
} 
var detailView = function(picture, name, price, material, ogcost, color, type) {
  return `
<div class="info">
<div class="card-deck">
  <div class="card border-dark" style="width: 18rem;">
    ${picture ? `<img src="${picture[0].url}">` : ``}
      <div class="card-body">
        <h2 class="card-title">${name}</h2> 
        // <p class="card-text"><u>Annual Salaries</u> <br> Low Salary: $${toCommas(lowRate*24)} <br> High Salary: $${toCommas(highRate*24)} <br> (Average Salary: $${toCommas(avgRate*24)})</p>
      </div> 
  </div>
  
   <div class="card border-dark" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">Job Description</h2> 
      <p class="card-text">${material}</p>
    </div>
   </div>    
   <div class="card border-dark" style="width: 18rem;">
    <div class="card-body">   
      <h2 class="card-title">Certifications</h2>
      // <p class="card-text">${formattedString(certificates)}</p>
     </div> 
   </div>  
 </div>   
</div>  
  <div class="back">
  <p><button type="button"><a href="index.html">Back</button></a>
  </div> 
  `;
}

var id = getParameterByName('id');
if (id) {
  getOneRecord(id);
} else {
  getAllRecords();
}