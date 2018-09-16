module.exports = {
    setSetting(setting) {
        if(setting==null) {
            setting = {};
            setting.method = "GET";
            setting.dataType = "json";
            setting.contentType = "application/json; charset=UTF-8";
            setting.async = true;
        }else{
            if(setting["method"]==null){
                setting.method = "GET";
            }
            if(setting["dataType"]==null){
                setting.dataType = "json";
            }
            if(setting["contentType"]==null){
                setting.contentType = "application/json; charset=UTF-8";
            }
            if(setting["async"]==null){
                setting.async = true;
            }
        }
        return setting;
    },

    call (setting) {
        if (!setting.dataType) setting.dataType = 'json';
        let islogin = true;
        if(setting["login"]){
            islogin = false;
        }       
        let dtd = $.Deferred();
        let url = setting.url;
        let param = setting.data;
        $.ajax({
            beforeSend:function(request){
                if(islogin){
                     const tokenJSON = JSON.parse(sessionStorage.getItem("Authorization"));
                     const token = 'Bearer '+ tokenJSON.token;
                    //const token = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjU0OTczNzIsImV4cCI6MTUyNTUwODE3Mn0.BnQ6808N28S8X15ykCxE5xHGGr_rTTGBXnLbCmvuV3LT3WS9xlP6bhGMw9pKURfOC0ADL3Nry_qQXd06ibekhnvzRefoxO2zVGig9hevYqsxSyW3o8e5s3RLU6cneJ68VURECsEUAnTJDCVfIM9AxLXsyO8soxCLPKEs4QfPwT0";
                    request.setRequestHeader("Authorization",token);
                }
            },
            // beforeSend:function(jqXHR){
            //     if(islogin){
            //         const token = JSON.parse(sessionStorage.getItem("Authorization"));
            //     }    
            // },
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Headers": "Authorization",
            //     "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjU0OTczNzIsImV4cCI6MTUyNTUwODE3Mn0.BnQ6808N28S8X15ykCxE5xHGGr_rTTGBXnLbCmvuV3LT3WS9xlP6bhGMw9pKURfOC0ADL3Nry_qQXd06ibekhnvzRefoxO2zVGig9hevYqsxSyW3o8e5s3RLU6cneJ68VURECsEUAnTJDCVfIM9AxLXsyO8soxCLPKEs4QfPwT0"
            // },
            method: setting.method,
            dataType:setting.dataType,
            contentType:setting.contentType,
            async:setting.async,
            url:url,
            data:param,
            success:function(data) {
                //console.log("data_check!!!!!!!!!!!!!!!!!!!!!!!!",data);
                dtd.resolve(data);
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {
                dtd.reject(XMLHttpRequest);
            }
        });
        return dtd.promise();
    }
}    