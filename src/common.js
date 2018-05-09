exports.generateAthenaKey = (data, keyPrefix, timestamp, id) => {

  var eventDate = timestamp; //new Date(timestamp * 1000); //convert from unix timestamp
  var year = eventDate.getUTCFullYear(); 
  var month = eventDate.getUTCMonth() + 1; 
  var day = eventDate.getUTCDate(); 

  var key = keyPrefix + "year=" + year + "/month=" + month + "/day=" + day + "/" + id; 

  data.year = year; 
  data.month = month; 
  data.day = day; 
  data.iso_timestamp = eventDate.toISOString(); 

  return key + ".json.gz"; 
};