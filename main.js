$(document).ready(function () {
    $("#btn").click(function () {
        /********************************Check Input and Prepand in Ul**************/
        if ($(".todo").val() !== "") {
            var todo = $(".todo").val();
            $(".todo").val("");
            var newLi =
                "<li><input class='check' type='checkbox'><span>&nbsp;&nbsp;&nbsp;" +
                todo +
                "</span>&nbsp;<button class='edit'><i class='fa fa-pencil' aria-hidden='true'></i></button>&nbsp;<button class='removeData'><i class='fa fa-trash-o' aria-hidden='true'></i></button></li>";
            $(".task ul").prepend(newLi);

            /**************************************Complete/ Remaing******************************/
            $("input:checkbox").click(function () {
                var $this = $(this);
                if (this.checked) {
                    $this.parent().addClass("completed");
                } else {
                    $this.parent().removeClass("completed");
                }
            });

            /**********************************Remove Function***************************************/
            $(".removeData").click(function () {
                $(this).parent().remove();
            });

            /**********************************Edit Function***************************************/
            $(".edit").click(function () {
                $(this).closest("li").find("span").prop("contenteditable", true).focus();
            });
        } else {
            alert("Please Enter a Task.....");
        }
    });
});
