
$(function () {
    $(function () {
        $("#imgDraggable").hide();
    });
});
$(function () {
    $("#showDraggable").click(function () {
        $("#imgDraggable").toggle();
        var btn = $("#showDraggable");
        if (btn.val() ==="ShowCode"){
          btn.val("hideCode");
        }else {
            btn.val("ShowCode");
        }
        // $("#showDraggable").val("hide");

    });
});
$(function () {
    $(function () {
        $("#imgDroppable").hide();
    });
});
$(function () {
    $("#showDroppable").click(function () {
        $("#imgDroppable").toggle();
        // $("#showDraggable").setValue("Hide");
    });
});
