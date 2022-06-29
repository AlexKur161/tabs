const btn = document.querySelectorAll('.btntab');
const tabs = document.querySelectorAll('.tab');

btn.forEach(item => {
    item.addEventListener('click',() => {
        let itemData = item.getAttribute('data-tab');
        let tabShow = document.querySelector(itemData);
        btn.forEach(itemtab =>{
            itemtab.classList.remove('active')
        })
        item.classList.add('active');
        tabs.forEach((itemshow)=>{
            itemshow.classList.remove('show');
        })
        tabShow.classList.add('show');
    })
})

