const observer = lozad(); // lazy loads elements with default selector as '.lozad'

observer('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
            el.classList.add('fade')
        }
    }
}).observe()
