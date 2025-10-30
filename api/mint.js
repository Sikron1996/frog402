require("dotenv").config();

module.exports = (req, res) => {
  const host = req.headers.host;
  const publicUrl = process.env.PUBLIC_URL || (host ? `https://${host}` : "");

  res.status(402).json({
    x402Version: 1, // число, не string
    type: "x402",
    chainId: 8453,
    id: "offer-1",
    payment: {
      currency: "USDC",
      tokenAddress: process.env.USDC_ADDRESS,
      amount: 1,
      receiver: process.env.TREASURY
    },
    resource: `${publicUrl}/api/mint?id=1`,
    metadata: {
      name: "x402frogs #1",
      description: "Mint x402frogs collectible for 1 USDC",
      image: "https://ipfs.io/ipfs/QmepBFK4YT8KwB4GNg3pwBdtDJy8kr8RtPgURTBdqt8fV8/1.png"
    }
  });
};
