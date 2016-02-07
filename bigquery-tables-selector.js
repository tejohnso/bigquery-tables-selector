(function() {
  var thisImportDoc = document.currentScript.ownerDocument,
  selectElement = thisImportDoc.querySelector("select"),
  proto = Object.create(HTMLElement.prototype);
  proto.createdCallback = function() {
    this.appendChild(selectElement);
  };

  document.registerElement("bigquery-tables-selector", {prototype: proto});

  document.querySelector("bigquery-datasets-selector").addEventListener("change", populateTables);

  function populateTables(e) {
    var projectId = document.querySelector("bigquery-projects-selector select").value;
    var datasetId = document.querySelector("bigquery-datasets-selector select").value;
    reset();
    gapi.client.bigquery.tables.list({"projectId": projectId, "datasetId": datasetId})
    .then((resp)=>{
      resp.result.tables.forEach((val)=>{
        var option = document.createElement("option");
        option.text = val.friendlyName || val.tableReference.tableId;
        selectElement.add(option);
      });

      selectElement.options[0].textContent = "Choose table";
    });
  }

  function reset() {
    if (!selectElement) {return;}
    for (var i = 1, j = selectElement.children.length; i < j; i += 1) {
      selectElement.removeChild(selectElement.children[1]);
    }
    selectElement.children[0].innerHTML = "Select a dataset";
  }
}());
