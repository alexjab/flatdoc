import $ from "jquery"

export const loadData = (locations, response, callback) => {
  if (locations.length === 0) callback(null, response);

  else $.get(locations.shift())
    .fail(function(e) {
      callback(e, null);
    })
    .done(function (data) {
      if (response.length > 0) response += '\n\n';
      response += data;
      loadData(locations, response, callback);
    });
}
