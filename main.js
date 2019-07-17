atto({url:'https://europe-west1-hkraft-prod.cloudfunctions.net/sildikon-valley-smart-city-bq'})
  .done(function (response) {
    const queryResult = JSON.parse(response);
    const listElement = document.getElementById('content-list');
    for (item of queryResult) {
      listElement.insertAdjacentHTML("beforeend", "<li>" + item.DeviceID + "</li>");
    }
  })
  .error(function (error, response) {
    alert(error);
  });
