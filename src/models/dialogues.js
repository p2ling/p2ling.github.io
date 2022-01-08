const personas = {
  liquidity_pool: "Prospero the Provider",
  info_center: "Winterrose the Wise",
  bonds: "Brigid the Bargain Hunter",
  accumulator: "Axelrod the Accumulator",
  trade_center: "Townes the Trader"
}

function DialogueMessage(messages) {
  return (messages)
}

const dialogues = {
  'home': {
    persona: personas.info_center,
    message: DialogueMessage(['Early days...']),
  },
  'dashboard': {
    persona: personas.info_center,
    message: DialogueMessage(["Isn't our dashboard .... dashing!"]),
  },
  'info_center': {
    persona: personas.info_center,
    message: DialogueMessage(['Hello and welcome to the Financial Innovation Center. What would you like to learn about today? ']),
  },
  'info_center/swaps': {
    persona: personas.info_center,
    message: DialogueMessage([
      "Swaps are how you can purchase different tokens! Just choose the paring you want to swap between and hit the “Swap” button!",
      "Look for Townes the Trader. He has the best rates in the World."
    ]),
  },
  'info_center/bonds': {
    persona: personas.info_center,
    message: DialogueMessage([
      "Bonds are the way you buy wrapped BTC - our base currency for upgrading to accumulators",
    ]),
  },
  'info_center/liquidity_pools': {
    persona: personas.info_center,
    message: DialogueMessage([
      "Liquidity pools enable users to buy and sell crypto on decentralized exchanges and other DeFi platforms without the need for centralized market makers.",
      "Decentralised FTW"
    ]),
  },
  'info_center/accumulators': {
    persona: personas.info_center,
    message: DialogueMessage([
      "Accumulators are how you will generate safe, steady wealth with us. The backing for each will never go down!",
      "Choose one that suits your liquidity preferences of 7, 14 or 21 days downgrade period.",
      "The longer you pick, the greater the rewards! 💎🤲"
    ]),
  },

  'info_center/connecting': {
    persona: personas.info_center,
    message: DialogueMessage([
      "https://discord.gg/m5Bgp4HR. This is the way."
    ]),
  },

  'liquidity_pool': {
    persona: personas.liquidity_pool,
    message: DialogueMessage(['Got some spare tokens lying around? Well put them to use! You can pretty sizable returns just by putting them in deposit here.']),
  },
  'liquidity_pool/add': {
    persona: personas.liquidity_pool,
    message: DialogueMessage(['Deposits must always be added in a 50:50 ratio. No more, no less. Always perfectly balanced.']),
  },
  'liquidity_pool/add/success': {
    persona: personas.liquidity_pool,
    message: DialogueMessage(["Add success!", "Now sit back, relax, and watch your tokens work."]),
  },
  'bonds': {
    persona: personas.bonds,
    message: DialogueMessage([
      "Looking for the best discounts aye?",
      "Well these are the best ones available. Or at least it should be? I hope.",
      "Oh remember it takes 7 moons to receive your full loot!",
    ]),
  },
  'bonds/mint/success': {
    persona: personas.bonds,
    message: DialogueMessage([
      "Oy! Your mint is complete. Pretty sweet deal you got mate.",
      "You will receive your BTCA linearly over the next 7 moons.",
      "Better check that you received the right amount. ",
      "Sometimes... things get a little wonky around here. Ain’t my fault! Go find Winterrose the Wise. She seems to know everything.",
    ]),
  },
  'trader': {
    persona: personas.trade_center,
    message: DialogueMessage([`Swap swap swap...`]),
  },
  'trader.success': {
    persona: personas.accumulator,
    message: DialogueMessage([`Axelrod dialogue`]),
  },
  'accumulators': {
    persona: personas.accumulator,
    message: DialogueMessage([
      "Hello and welcome to my Accumulator  selection. ",
      "Accumulators are a unique tokens that will continuously accrue more of its underlying asset.",
      "All you have to do is sit back, relax, and let it work its magic."
    ])
  },
  'accumulators/info': {
    persona: personas.accumulator,
    message: DialogueMessage([
      "APR means annual percentage rate. This is the additional amount of underlying assets you should accrue after a year.",
      "Keep in mind that this value is a last 7-days rolling average so it will continuously change.",
    ])
  },
  'accumulators/upgrade': {
    persona: personas.accumulator,
    message: DialogueMessage([
      "This is how long it will take should you wish to downgrade your accumulator tokens.",
      "Once you initiate the downgrade, your tokens will cease its accumulating benefit."
    ])
  },
  'accumulators/downgrade': {
    persona: personas.accumulator,
    message: DialogueMessage([
      "This is how much underlying asset each accumulator token is being backed by.",
      "This is also the multiplier used to  upgrade or downgrade your accumulator tokens."
    ])
  },
};


export default dialogues 