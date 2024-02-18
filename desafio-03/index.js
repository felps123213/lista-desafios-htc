const $output = document.querySelector('.output')
const $input = document.querySelector('.input')
const $form = document.querySelector('.form')

$form.addEventListener('submit', function(event){
    event.preventDefault()

    const number = Number($input.value)
    console.log(number)

    for (let index = 0; index < number + 1; index++){
        $output.textContent = $output.textContent + index + ' '
    }
})