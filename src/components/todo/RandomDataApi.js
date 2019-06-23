class RandomDataApi {
    
     ApiCall(params) {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
              console.log(data);
            }
          });
    }
}