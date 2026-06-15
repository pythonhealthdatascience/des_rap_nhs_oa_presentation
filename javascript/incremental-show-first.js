// Source - https://stackoverflow.com/a/79669416
// Posted by whopper510, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-15, License - CC BY-SA 4.0

document.addEventListener("DOMContentLoaded", function () {

  const incrementalLists = document.querySelectorAll('.show-first ol, .show-first ul');

  incrementalLists.forEach(list => {
    const firstItem = list.querySelector('li');
    if (firstItem) {
      firstItem.classList.remove('fragment', 'data-fragment-index');
    }
  });

});
