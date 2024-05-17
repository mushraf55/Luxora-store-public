export function getProduct(productId){
    let matchingProduct;

    product.forEach((products) => {
      if (products.id === productId) {
        matchingProduct = products;
      }
    });

    return matchingProduct;

};



export const product = [
    {
        id: "aaa111",
        image: "Images/Products/Yua-Leather-Clutch.png",
        name: "Yua Leather Clutch",
        stars: 2.5,
        priceCents: 9000

    },
    {
        id: "aaa112",
        image: "Images/Products/Calfskkin-shoulder.png",
        name: "Calf Skin Shoulder Bag",
        stars: 5,
        priceCents: 5099
    },
    {
        id: "aaa113",
        image: "Images/Products/Aesthetic-canvas-tote.png",
        name: "Aesthetic Canvas Tote",
        stars: 4,
        priceCents: 1199
    },
    {
        id: "aaa114",
        image: "Images/Products/ceclia-tote.png",
        name: "Ceclia Tote",
        stars: 5,
        priceCents: 19500
    },
    {
        id: "aaa115",
        image: "Images/Products/Crossbody-sling-bag.png",
        name: "CrossBody Sling Bag",
        stars: 4.5,
        priceCents: 2399
    },
    {
        id: "aaa116",
        image: "Images/Products/cute-sofft.png",
        name: "Cute Soft Bag",
        stars: 4,
        priceCents: 2599
    },
    {
        id: "aaa117",
        image: "Images/Products/Economical-cotton-tote.png",
        name: "Economical Cotton Tote",
        stars: 4.5,
        priceCents: 6699
    },
    {
        id: "aaa118",
        image: "Images/Products/Gathered-frame-clutch.png",
        name: "Gathered Frame Clutch",
        stars: 4.5,
        priceCents: 3099
    },
    {
        id: "aaa119",
        image: "Images/Products/kinmac-women-laptop-bag.png",
        name: "Kinmac Women Laptop Bag",
        stars: 5,
        priceCents: 2900
    },
    {
        id: "aaa120",
        image: "Images/Products/Knitted-shoulder-tote.png",
        name: "Knitted Shoulder Tote Bag",
        stars: 5,
        priceCents: 1499
    },
    {
        id: "aaa121",
        image: "Images/Products/Large-40-L.png",
        name: "Large 40 L",
        stars: 4,
        priceCents: 1200
    },
    {
        id: "aaa122",
        image: "Images/Products/Maika-zipped-backpack.png",
        name: "Maika Zipped Backpack",
        stars: 5,
        priceCents: 8200 
    },
    {
        id: "aaa123",
        image: "Images/Products/mens-messenger-bag.png",
        name: "Mens Messenger Bag",
        stars: 3,
        priceCents: 3686 
    },
    {
        id: "aaa124",
        image: "Images/Products/padded-laptop-sleves.png",
        name: "Padded Laptop Sleves",
        stars: 4.5,
        priceCents: 3600
    },
    {
        id: "aaa125",
        image: "Images/Products/Travelon-anti-theft.png",
        name: "Travelon Anti-theft Bag",
        stars: 3.5,
        priceCents: 4099
    },
    {
        id: "aaa126",
        image: "Images/Products/Women-beige-shoulder-bag.png",
        name: "Women Beige Shoulder Bag",
        stars: 4,
        priceCents: 4200
    },
    {
        id: "aaa127",
        image: "Images/Products/Womens-mini-bag.png",
        name: "Womens Mini Bag",
        stars: 4.5,
        priceCents: 2095
    },
    {
        id: "aaa128",
        image: "Images/Products/Woven-tote.png",
        name: "Woven Tote Bag",
        stars: 4,
        priceCents: 4299
    },
    {
        id: "aaa129",
        image: "Images/Products/newbags/adisa-handbag-women.png",
        name: "Adisa handbag women",
        stars: 3.5,
        priceCents: 1288
    },
    {
        id: "aaa130",
        image: "Images/Products/newbags/betula-shoulder.png",
        name: "Betula Shoulder",
        stars: 3,
        priceCents: 1700
    },
    {
        id: "aaa131",
        image: "Images/Products/newbags/dualtone-shoulder.png",
        name: "DualTone shoulder",
        stars: 4,
        priceCents: 2700
    },
    {
        id: "aaa132",
        image: "Images/Products/newbags/handcrafted-tote.png",
        name: "Handcrafted tote",
        stars: 4.5,
        priceCents: 2100
    },
    {
        id: "aaa133",
        image: "Images/Products/newbags/jungle-downtown.png",
        name: "Jungle Downtown",
        stars: 4.5,
        priceCents: 3100
    },
    {
        id: "aaa134",
        image: "Images/Products/newbags/large-cap-shoulder.png",
        name: "Large Capacity Shoulder",
        stars: 4,
        priceCents: 1100
    },
    {
        id: "aaa135",
        image: "Images/Products/newbags/leather-tote.png",
        name: "Leather tote",
        stars: 4.5,
        priceCents: 3199
    },
    {
        id: "aaa136",
        image: "Images/Products/newbags/legal-bribe.png",
        name: "Legal Bribe",
        stars: 4.5,
        priceCents: 2199
    },
    {
        id: "aaa137",
        image: "Images/Products/newbags/pure-leather-shoulder.png",
        name: "Pure Leather Shoulder",
        stars: 4.5,
        priceCents: 4188
    },
    {
        id: "aaa138",
        image: "Images/Products/newbags/venture-workpack.png",
        name: "Workpack",
        stars: 4.5,
        priceCents: 1188
    }
    
]