var images_array = document.querySelectorAll(".image_box");



var current_image_index = 0;

document.getElementById("ig_all_img").textContent = images_array.length;

images_array.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    current_image_index = index;
    document.getElementById("show_image_card_id").src = e.target.src
    document.getElementById("ig_current_img").textContent = index+1;
    document.getElementById("show_img_box_id").style.display = "flex"
    console.log("elements", e.target.src)
  })
})


var prev_btn_image_gallery = document.getElementById("prev_btn_image_gallery");
var next_btn_image_gallery = document.getElementById("next_btn_image_gallery");



prev_btn_image_gallery.addEventListener("click", () => {
  if (current_image_index >= 1) {
    document.getElementById("show_image_card_id").src = images_array[current_image_index - 1].children[0].src;
    current_image_index = current_image_index - 1;
    document.getElementById("ig_current_img").textContent = current_image_index+1;
  }

})


next_btn_image_gallery.addEventListener("click", () => {
  if (current_image_index <= images_array.length - 2) {
    document.getElementById("show_image_card_id").src = images_array[current_image_index + 1].children[0].src;
    current_image_index = current_image_index + 1;
    document.getElementById("ig_current_img").textContent = current_image_index+1;
  }

})

var close_image_gallery_box = document.getElementById("close_image_gallery_box");

close_image_gallery_box.addEventListener("click", () => {
  document.getElementById("show_img_box_id").style.display = "none"
})