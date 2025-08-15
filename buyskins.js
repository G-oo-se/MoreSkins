document.addEventListener("DOMContentLoaded", () => {
    class Item {
        constructor(image, name, price, k, p, r, m, sg, sm, g, s, sr){
            this.image = image
            this.name = name
            this.price = price
            this.k = k
            this.p = p
            this.r = r
            this.m = m
            this.sg = sg
            this.sm = sm
            this.g = g
            this.s = s
            this.sr = sr
        }
        display(){
            return`<div class="item">
                                <img src="${this.image}" alt="" title="">
                                <div class="itemBottom">
                                    <div class="itemName">${this.name}</div>
                                    <div class="itemPrice">${this.price}</div>
                                </div>
                                <div class="cart">
                                    <div class="cart-wrapper">
                                        <i class='bx bx-cart-alt'></i>
                                        &nbsp;
                                        <span>Добавить в корзину</span>
                                    </div>
                                </div>
                            </div>`
        }
    }

    let marketItems = document.getElementById("market");
    console.log(marketItems);
    let items = [
        new Item("novaiapapka/views/images/market/sticker1.png", "Sticker | kyxsan (Holo) | Shanghai 2024", "90.4 ₸", false, false, false, false, false, false, false, true, false),
        new Item("novaiapapka/views/images/market/145893_s.png", "Desert Eagle | Blue Ply", "100.1 ₸", false, true, false, false, false, false, false, false, false),
        new Item("novaiapapka/views/images/market/148864_s.png", "Sticker | BIG (Holo) | 2020 RMR", "90.4 ₸", false, false, false, false, false, false, false, true, false),
        new Item("novaiapapka/views/images/market/16552_s.png", "★ Sport Gloves | Superconductor", "2 492 540.7 ₸", false, false, false, false, false, false, true, false, false),
        new Item("novaiapapka/views/images/market/12348_s.png", "AK-47 | Elite Build", "998.2 ₸", false, false, true, false, false, false, false, false),
        new Item("novaiapapka/views/images/market/141370_s.png", "AWP | Atheris", "1426.8 ₸", false, false, false, false, false, false, false, false, true),
        new Item("novaiapapka/views/images/market/148018_s.png", "AWP | Exoskeleton", "2034.6 ₸", false, false, false, false, false, false, false, false, true),
        new Item("novaiapapka/views/images/market/15113_s.png", "★ Bayonet | Damascus Steel", "158 486.74 ₸", true, false, false, false, false, false, false, false, false),
        new Item("novaiapapka/views/images/market/8309_s.png", "Galil AR | VariCamo", "67.2 ₸", false, false, false, false, false, false, false, true, false),
        new Item("novaiapapka/views/images/market/148864_s.png", "Sticker | BIG (Holo) | 2020 RMR", "90.4 ₸", false, false, false, false, false, false, false, true, false),
    ];
    for(i=0; i<items.length; i++){
        marketItems.innerHTML += items[i].display();
    };

    let sorted = items
});