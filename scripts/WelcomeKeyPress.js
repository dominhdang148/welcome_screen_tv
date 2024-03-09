document.addEventListener('keydown', function (event) {
    var key = event.key;
    var radioInputs = document.querySelectorAll('input[type="radio"]');
    var container = document.querySelector('.language-cards');

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
        var currentIndex = Array.from(radioInputs).findIndex(function (input) {
            return input.checked;
        });

        if (currentIndex !== -1) {
            var newIndex;
            if (key === 'ArrowLeft') {
                newIndex = currentIndex - 1 < 0 ? radioInputs.length - 1 : currentIndex - 1;
            } else {
                newIndex = (currentIndex + 1) % radioInputs.length;
            }

            radioInputs[newIndex].checked = true;

            var card = radioInputs[newIndex].closest('.language-card');
            var cardRect = card.getBoundingClientRect();
            var containerRect = container.getBoundingClientRect();
            var scrollOffset = cardRect.left - containerRect.left - (containerRect.width - cardRect.width) / 2;
            container.scrollLeft += scrollOffset;
        }
    }
});