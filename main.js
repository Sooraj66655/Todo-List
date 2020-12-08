$(document).ready(function () {
    $("#btn").click(function () {
        /********************************Check Input and Prepand in Ul**************/
        if ($(".todo").val() !== "") {
            var todo = $(".todo").val();
            $(".todo").val("");
            var newLi =
                "<li><input class='check' type='checkbox'>&nbsp;&nbsp;&nbsp;<span>" +
                todo +
                "</span>&nbsp;<button class='edit'><i class='fa fa-pencil' aria-hidden='true'></i></button>&nbsp;<button class='removeData'><i class='fa fa-trash-o' aria-hidden='true'></i></button></li>";
            $(".task ul").prepend(newLi);

            /**************************************Complete/ Remaing******************************/
            $("input:checkbox").click(function () {
                var $this = $(this);
                if (this.checked) {
                    $this.parent().addClass("completed");
                     $(".edit").attr("disabled",true);
                } else {
                    $this.parent().removeClass("completed");
                     $(".edit").attr("disabled",false);
                }
            });

            /**********************************Remove Function***************************************/
            $(".removeData").click(function () {
                $(this).parent().remove();
            });

            /**********************************Edit Function***************************************/
            $(".edit").click(function () {
                $(this).find("i").toggleClass("fa fa-pencil fa fa-floppy-o");
                var $EDIT = $(this).parent().find("span"),
                    isEditable = $EDIT.is(".editable");
                $(this).parent().find("span").prop("contenteditable", !isEditable).toggleClass("editable").focus();
            });
        } else {
            alert("Please Enter a Task.....");
        }
    });
});
