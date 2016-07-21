Template.body.events({
    "click #btn_write" : function (evt,tmpl) {
        evt.preventDefault();
        console.log($('#exampleInputName2').val() +"  "+$('#exampleInputEmail2').val());
        // insert({
        //     key1 : $('#exampleInputName2').val(),
        //     key2 : $('#exampleInputEmail2').val()
        // });
    }
});