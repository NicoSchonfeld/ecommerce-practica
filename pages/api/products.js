export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Apple iPhone 13 Pro Max (512 GB) - Graphite",
      price: 465336,
      amount: 0,
      image: "https://i.imgur.com/Ic09clq.png",
      description:
        "iPhone 13 Pro Max. The biggest breakthrough in the Pro camera system so far. Super Retina XDR display with ProMotion provides faster and smoother response. A15 Bionic chip for out-of-the-box performance. Rugged design and the longest battery life ever seen on an iPhone.",
    },
    {
      id: 1,
      name: "Apple Watch SE (GPS, 40mm)",
      price: 85999,
      amount: 0,
      image: "https://i.imgur.com/HSwWgz5.png",
      description:
        "Powerful features to help you lead a more connected, active, healthy and safe life. The Apple Watch SE is much more than a watch and is more at your fingertips.",
    },
    {
      id: 1,
      name: "Apple AirPods Pro with charging case MagSafe",
      price: 43999,
      amount: 0,
      image: "https://i.imgur.com/m2BeHLE.png",
      description:
        "AirPods Pro have Active Noise Cancellation for immersive sound. Ambient mode so you can listen to everything that happens around you. Water and sweat resistance(1). And a customizable fit for you to wear comfortably all day.",
    },
  ]);
}
