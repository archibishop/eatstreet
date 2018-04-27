
data = {
    "email":"test@gmail.com",
    "password":"12345",
    "firstName":"craig",
    "lastName":"red",
    "phone":"074893746"
}

$(document).ready(function(){
    submitRegister(data)
});



function submitRegister(data) {
                $.ajax({
                    headers: {"X-ACCESS-Token" : "f716ae617b07023d"},
                    url: 'https://api.eatstreet.com/publicapi/v1/update-user/f0663b34127ab652f8b8fa39ed57c871e41ee9406039e889',
                    method: 'POST',
                    data: JSON.stringify(data),// now data come in this function
                    contentType: "application/json",
                    dataType: "json",
                    // data: $("#register-form").serialize(),
                    success: function (rawData) {
                        // var parsed = JSON.parse(rawData);
                        var parsed = JSON.stringify(rawData);

                        // if (!parsed) return;
                        // var searchResults = $("#search-results");
                        // print(rawData)
                        // alert("" + rawData)
                        alert('Update Success')
                        alert(rawData.apiKey)
                        alert(rawData.firstName)
                        alert(rawData.lastName)
                        alert(rawData.phone)
                        alert(rawData.email)
                        // searchResults.empty();

                        // parsed.forEach(function (result) {
                        //     var row = $("<tr><td>" + result.Title + "</td><td>" + result.Author +
                        //         "</td><td>" + result.Year + "</td><td>" + result.ID +
                        //         "</td></tr>");
                        //     searchResults.append(row);
                             // row.on("click", function () {
                        //         $.ajax({
                        //             url: "/books?id=" + result.ID,
                        //             method: "PUT",
                        //             success: function (data) {
                                        
                        //             }
                        //         })
                         //    })
                         // });
                    }
                });
                return false;
            }