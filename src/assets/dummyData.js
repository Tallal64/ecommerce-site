import { nanoid } from "nanoid";
import kid from "./imgs/kid.jpg";
import kid1 from "./imgs/kid1.png";
import kid2 from "./imgs/kid2.png";
import kid3 from "./imgs/kid3.png";
import kid4 from "./imgs/kid4.png";
import kid5 from "./imgs/kid5.png";
import kid6 from "./imgs/kid6.png";
import kid7 from "./imgs/kid7.png";
import man from "./imgs/man.jpg";
import men1 from "./imgs/men1.png";
import men2 from "./imgs/men2.png";
import men3 from "./imgs/men3.png";
import men4 from "./imgs/men4.png";
import men5 from "./imgs/men5.png";
import men6 from "./imgs/men6.png";
import men7 from "./imgs/men7.png";
import men8 from "./imgs/men8.png";
import men9 from "./imgs/men9.png";
import woman from "./imgs/woman.jpg";
import women1 from "./imgs/women1.jpg";
import women2 from "./imgs/women2.jpg";
import women3 from "./imgs/women3.jpg";
import women4 from "./imgs/women4.jpg";
import women5 from "./imgs/women5.jpg";

export { kid, man, woman };

export const products = [
  {
    id: nanoid(),
    title: "Women's High-Waisted Wide-Leg Sweatpants",
    description:
      "Grounded in style, comfort and versatility, meet our take on luxury loungewear. These high-waisted sweats make a statement with midweight brushed fleece in a full-length, wide-leg design. Soft yet structured, they're anything but basic.",
    category: "Men's Clothing",
    price: 25.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 150,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: women1,
  },

  {
    id: nanoid(),
    title: "JacketBaby 2-Piece Hoodie Set",
    description:
      "Made of bonded jersey knit fabric, this 2-piece set is inspired by the classic warmup suit. The hoodie has a full-zip closure that makes layering easy, and the matching tapered pants have ribbed cuffs and an elasticized waistband for a comfy fit the smallest athletes can play freely in.",
    category: "Men's Clothing",
    price: 55.75,
    discountPercentage: 12,
    rating: 4.3,
    stock: 80,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: kid1,
  },
  {
    id: nanoid(),
    title: "Women's Mid-Rise Cargo Pants",
    description:
      "Easygoing yet tailored, these easy-fitting pants bring together comfort and simplicity to give you a wardrobe favorite. Woven ripstop fabric holds its shape while the oversized pockets add dimension.",
    category: "Kids' Clothing",
    price: 15.99,
    discountPercentage: 20,
    rating: 4.6,
    stock: 200,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: women2,
  },
  {
    id: nanoid(),
    title: "Nike Sportswear Premium Essentials",
    description:
      "The Nike Sportswear Premium Essentials T-Shirt has a loose fit for a carefree, comfortable look. Its heavyweight organic cotton fabric feels thick and soft. This product is made with at least 75% organic cotton fibers.",
    category: "Men's Clothing",
    price: 40.89,
    discountPercentage: 10,
    rating: 4.7,
    stock: 120,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: men1,
  },
  {
    id: nanoid(),
    title: "Baby 2-Piece Set",
    description:
      "This 2-piece set is an easy way to dress little athletes in coordinated Swooshtastic style engineered for play. The graphic long sleeve tee is made of jersey knit fabric in a boxy cut with dropped shoulders for a relaxed fit and the matching leggings have an encased elastic waistband and is enhanced with quick-drying, moisture-wicking Dri-FIT technology to help keep kiddos cool and dry while they play",
    category: "Kids' Clothing",
    price: 28.5,
    discountPercentage: 18,
    rating: 4.4,
    stock: 90,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: kid2,
  },
  {
    id: nanoid(),
    title: "Women's Mid-Rise Open-Hem Pants",
    description:
      "Simplicity meets functionality. These crisp, crinkled pants have everything you need for all-day wear: water-repellent fabric, multiple pockets and an adjustable design. A bungee toggle at the hem means you can tighten it for a jogger-like fit or keep it open for a relaxed look. You've got stylish options—rain or shine.",
    category: "Men's Clothing",
    price: 45.0,
    discountPercentage: 10,
    rating: 4.5,
    stock: 110,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: women3,
  },

  {
    id: nanoid(),
    title: "Max90 T-Shirt",
    description:
      "Dropped shoulders, longer sleeves and a roomy fit through the body and hips give the Max90 tee a relaxed and casual look. Midweight cotton fabric feels soft and has a slight drape.",
    category: "Kids' Clothing",
    price: 22.5,
    discountPercentage: 12,
    rating: 4.2,
    stock: 130,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: men3,
  },
  {
    id: nanoid(),
    title: "Little Kids' Hoodie",
    description:
      "Kiddos can flaunt their Swooshtastic style in this pullover hoodie, which is made of soft fleece fabric in a cozy, roomy cut that’s easy to layer and the kangaroo pocket can help keep little hands toasty or store small items.",
    category: "Men's Clothing",
    price: 32.99,
    discountPercentage: 8,
    rating: 4.6,
    stock: 100,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: kid4,
  },
  {
    id: nanoid(),
    title: "Women's Fleece Pants",
    description:
      "Premium fabric and a laid-back design highlight the Nike Solo Swoosh Pants. Part of the Essentials collection, these pants use a soft feel with a loose fit for all-day wear.",
    category: "Kids' Clothing",
    price: 38.0,
    discountPercentage: 14,
    rating: 4.9,
    stock: 80,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: women4,
  },
  {
    id: nanoid(),
    title: "Men's Dri-FIT Short-Sleeve Versatile Top",
    description:
      "Run, spin, lift, stretch—no matter where your workout takes you, we have you covered in the sweat-wicking Primary Top. We designed it to be soft and comfortable, with underarm ventilation to help keep you cool during your reps.",
    category: "Men's Clothing",
    price: 120.49,
    discountPercentage: 5,
    rating: 4.7,
    stock: 40,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: men4,
  },
  {
    id: nanoid(),
    title: "Toddler French Terry Pants",
    description:
      "Featuring multiple pockets for lots of space to stash small items and newfound treasures, these cozy joggers are sure to become one of your kiddo's everyday faves. They're made of soft French Terry, the waistband is stretchy for a comfy fit and relaxed taper of the legs provide a cozy feel so they can focus on painting their future. Pair with any of the Nike Paint Your Future tops for a coordinated look.",
    category: "Kids' Clothing",
    price: 22.99,
    discountPercentage: 18,
    rating: 4.5,
    stock: 200,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: kid5,
  },
  {
    id: nanoid(),
    title: "Women's Tunnel Pants",
    description:
      "Players have the tunnel walk. You have the sidewalk. Both are the perfect opportunity to get a 'fit off. The easy, relaxed cut and 4-way stretch material lets these pants move with you while maintaining their shape (and your look). Gathered jogger-style cuffs break perfectly to showcase that pair of J's you just added to your rotation.",
    category: "Men's Clothing",
    price: 49.99,
    discountPercentage: 10,
    rating: 4.4,
    stock: 70,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: women5,
  },
  {
    id: nanoid(),
    title: "Men's Long-Sleeve T-Shirt",
    description:
      "The Nike Sportswear Long-Sleeve T-Shirt has a loose fit for a carefree, comfortable look. Its heavyweight organic cotton fabric feels thick and soft. A subtle Futura logo at the center front offers a signature Nike look while a set-on collar ensures a clean, comfortable fit. This product is made with at least 75% organic cotton fibers.",
    category: "Kids' Clothing",
    price: 35.99,
    discountPercentage: 15,
    rating: 4.8,
    stock: 150,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: men5,
  },
  {
    id: nanoid(),
    title: "Little Kids' Windrunner",
    description:
      "Rain? What rain?! Little athletes can still take it to the max in this statement jacket! It provides lightweight warmth and has a roomy cut and full-zip closure for easy layering. Zippered pockets help secure small essentials and the cozy billed hood and water-resistant finish helps kiddos stay warm and dry in light rains.",
    category: "Men's Clothing",
    price: 89.99,
    discountPercentage: 12,
    rating: 4.6,
    stock: 60,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: kid6,
  },
  {
    id: nanoid(),
    title: "Men's Dri-FIT Basketball T-Shirt",
    description:
      "Made with a relaxed fit, this tee's lightweight, sweat-wicking fabric helps keep you cool on the court and off.",
    category: "Kids' Clothing",
    price: 45.5,
    discountPercentage: 20,
    rating: 4.7,
    stock: 90,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: men6,
  },
  {
    id: nanoid(),
    title: "Little Kids' French Terry Shorts Set",
    description:
      "Reimagine how you dress your child for warm weather fun with this 2-piece set. The jersey knit tee has big logo love on display and the matching French Terry shorts feature a cargo pocket and a stretchy waistband for a comfy fit they can play freely in.",
    category: "Men's Clothing",
    price: 25.0,
    discountPercentage: 15,
    rating: 4.5,
    stock: 140,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: kid7,
  },
  {
    id: nanoid(),
    title: "Men's Max90 Basketball T-Shirt",
    description:
      "Embrace the Mamba Mentality in this loose-fit Max90 tee. Made with midweight cotton, it features Kobe's sheath logo across the chest.",
    category: "Men's Clothing",
    price: 19.99,
    discountPercentage: 5,
    rating: 4.3,
    stock: 150,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: men8,
  },
  {
    id: nanoid(),
    title: "Men's Nike Reversible Basketball Jersey",
    description:
      "Embrace the Mamba Mentality in this reversible sweat-wicking jersey. Much like Kobe on the court, its reversible design offers 2-way value to your wardrobe: breathable mesh on 1 side is paired with smooth knit and an embroidered Kobe logo on the other.",
    category: "Kids' Clothing",
    price: 27.99,
    discountPercentage: 10,
    rating: 4.6,
    stock: 110,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: men9,
  },
  {
    id: nanoid(),
    title: "Men's Graphic Pullover Hoodie",
    description:
      "A closet staple, the Nike Sportswear Club Fleece Pullover Hoodie gives you soft comfort in a street-ready style for an elevated, everyday look that you really can wear every day.",
    category: "Men's Clothing",
    price: 49.99,
    discountPercentage: 12,
    rating: 4.5,
    stock: 75,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: men7,
  },
  {
    id: nanoid(),
    title: "Men's T-Shirt",
    description:
      "This classic-fit tee is relaxed through the body for easy layering. Its lightweight cotton feels soft and comfortable for everyday wear.",
    category: "Kids' Clothing",
    price: 65.0,
    discountPercentage: 15,
    rating: 4.8,
    stock: 50,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: men2,
  },
  {
    id: nanoid(),
    title: "Toddler Full-Zip Hoodie",
    description:
      "Made of soft fleece knit fabric, this classic hoodie has a roomy cut for a cozy feel that makes layering easy. This simple yet timeless piece is easy to match with your kiddo's favorite jeans and for a coordinated look, pair with any of the Nike Sportswear Club bottoms.",
    category: "Men's Clothing",
    price: 39.99,
    discountPercentage: 10,
    rating: 4.4,
    stock: 60,
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 7-10 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    image: kid3,
  },
];
