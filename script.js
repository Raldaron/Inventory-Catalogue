const data = {
  weapons: [
    { name: "Sword", details: "A sharp blade for melee combat." },
    { name: "Bow", details: "A ranged weapon for shooting arrows." }
  ],
  armor: [
    { name: "Helmet", details: "Protects your head." },
    { name: "Shield", details: "Blocks attacks." }
  ],
  consumables: [
    { name: "Food Rations", details: "Restores energy." },
    { name: "Bandage", details: "Heals minor wounds." }
  ],
  potions: [
    { name: "Health Potion", details: "Restores health." },
    { name: "Mana Potion", details: "Restores mana." }
  ],
  miscellaneous: [
    { name: "Torch", details: "Provides light in dark areas." },
    { name: "Rope", details: "Useful for climbing or tying things up." }
  ],
  spells: [
    {
      name: "Astral Paw",
      mana_cost: "5",
      effect: "Manipulates items up to 50 lbs within line of sight.",
      range: "100 ft",
      duration: "Up to 5 minutes"
    },
    {
      name: "Bitch, What?",
      mana_cost: "10",
      effect:
        "Catches caster on fire, grants immunity to blunt damage, increases melee damage by 50%.",
      range: "Self",
      duration: "1 minute"
    },
    {
      name: "Legionnaires of the Damned",
      mana_cost: "15",
      effect: "Summons 5 spectral warriors for combat.",
      range: "60 ft",
      duration: "10 minutes"
    },
    {
      name: "Clockwork Triplicate",
      mana_cost: "12",
      effect:
        "Creates 3 robot duplicates capable of tasks or exploding on impact.",
      range: "30 ft",
      duration: "Until destroyed or 1 hour"
    },
    {
      name: "Laundry Day",
      mana_cost: "8",
      effect: "Gradually strips an enemy of their armor over 3 rounds.",
      range: "40 ft",
      duration: "3 rounds"
    },
    {
      name: "Magic Missile",
      mana_cost: "1/missile",
      effect:
        "Fires magical darts, each dealing 1d4+1 force damage (up to caster's Intelligence modifier).",
      range: "120 ft",
      duration: "Instantaneous"
    },
    {
      name: "Mute",
      mana_cost: "6",
      effect:
        "Silences a target, preventing them from casting spells or making loud noises.",
      range: "50 ft",
      duration: "10 seconds"
    },
    {
      name: "Puddle Jumper",
      mana_cost: "7",
      effect:
        "Teleports caster and up to 3 allies to any visible location within range.",
      range: "200 ft",
      duration: "Instantaneous"
    },
    {
      name: "Rigorous",
      mana_cost: "5",
      effect:
        "Reflects the next debuff or negative spell back to the attacker.",
      range: "Self",
      duration: "Until triggered or 10 minutes"
    },
    {
      name: "Second Chance",
      mana_cost: "20",
      effect:
        "Revives a fallen creature with 50% of their health for a brief period.",
      range: "Touch",
      duration: "5 minutes"
    },
    {
      name: "Skedaddle",
      mana_cost: "9",
      effect:
        "Allows caster to instantly teleport to a safe location they can see.",
      range: "Line of sight",
      duration: "Instantaneous"
    },
    {
      name: "Wall of Fire",
      mana_cost: "10",
      effect:
        "Creates a wall of fire 20 ft long and 5 ft high, dealing 2d6 fire damage to anyone passing through.",
      range: "50 ft",
      duration: "2 minutes"
    },
    {
      name: "Rubber",
      mana_cost: "6",
      effect: "Target becomes rubbery, reducing physical damage taken by 50%.",
      range: "Touch",
      duration: "5 minutes"
    },
    {
      name: "Get Out of Jail",
      mana_cost: "40",
      effect:
        "Teleports the caster out of confinement or bindings to a safe space they can see.",
      range: "500 ft",
      duration: "Instantaneous"
    },
    {
      name: "Heal Spell",
      mana_cost: "2",
      effect: "Restores 20% of the target's maximum health.",
      range: "Touch",
      duration: "Instantaneous"
    },
    {
      name: "Heal Critter",
      mana_cost: "3",
      effect: "Restores 30% of a pet or small animal's health.",
      range: "Touch",
      duration: "Instantaneous"
    },
    {
      name: "Hole",
      mana_cost: "12",
      effect:
        "Creates a hole up to 2 ft in diameter through barriers less than 1 ft thick.",
      range: "30 ft",
      duration: "5 minutes"
    },
    {
      name: "Minion Army",
      mana_cost: "18",
      effect:
        "Summons 20 minions that engage enemies. Minions have low health but can distract or overwhelm foes.",
      range: "100 ft",
      duration: "30 minutes"
    },
    {
      name: "Torch",
      mana_cost: "2",
      effect:
        "Produces a floating light that follows the caster, illuminating a 20 ft radius.",
      range: "Self",
      duration: "1 hour"
    },
    {
      name: "Twinkle Toes",
      mana_cost: "4",
      effect: "Enhances the target's agility and movement speed by 25%.",
      range: "Touch",
      duration: "10 minutes"
    },
    {
      name: "Loop-de-Loop",
      mana_cost: "5",
      effect:
        "Causes the target and the caster to switch places when triggered.",
      range: "50 ft",
      duration: "Instantaneous or until triggered"
    },
    {
      name: "Bang Bro",
      mana_cost: "6",
      effect:
        "Creates a loud, harmless explosion that distracts all enemies within a 30 ft radius.",
      range: "100 ft",
      duration: "Instantaneous"
    },
    {
      name: "Black Nimbus",
      mana_cost: "10",
      effect:
        "Covers an area in darkness, reducing visibility to near zero, making it hard for enemies to target allies.",
      range: "80 ft",
      duration: "10 minutes"
    },
    {
      name: "Fear",
      mana_cost: "8",
      effect:
        "Induces extreme fear in all enemies within a 30 ft radius, causing them to flee for the duration.",
      range: "Self (30 ft radius)",
      duration: "1 minute"
    },
    {
      name: "Ping",
      mana_cost: "4",
      effect:
        "Emits a pulse that detects and reveals all hidden or invisible entities within a 100 ft radius.",
      range: "Self",
      duration: "Instantaneous"
    },
    {
      name: "Protective Shell",
      mana_cost: "8",
      effect:
        "Creates a magical shell around the target that absorbs up to 20 points of damage.",
      range: "Touch",
      duration: "10 minutes"
    },
    {
      name: "Tripper",
      mana_cost: "5",
      effect:
        "Activates all traps within a 30 ft radius simultaneously, potentially damaging or incapacitating enemies.",
      range: "30 ft",
      duration: "Instantaneous"
    }
  ],
  automatons: [
    {
      name: "Modular Spider Automaton",
      type: "Small Automaton",
      rarity: "Legendary",
      description:
        "The Modular Spider Automaton is a sleek, multi-legged construct designed for versatility and adaptability. Its size can vary, with the smaller versions comparable to a shoe box, while the larger versions are akin to a medium-sized coffee table. The automaton features a streamlined, segmented body made from lightweight, durable metal plates that shimmer with a faint, magical glow. Each of its eight articulated legs is equipped with finely tuned joints and cushioned pads, allowing for silent and agile movement across various terrains. The spider's body is dotted with several modular attachment points, clearly marked for easy installation of various functional modules. Its head houses a pair of glowing, crystal eyes that can change color based on the active module, adding an eerie but captivating effect. The entire automaton is coated with a stealth material, giving it a matte finish that helps it blend into shadows and avoid detection.",
      base_components: [
        "Multi-Legged Mobility: Allows for rapid and agile movement across various terrains.",
        "Modular Attachment Points: Several slots to attach different functional modules.",
        "Advanced AI Core: Provides basic autonomous functions and can be programmed for specific tasks.",
        "Stealth Coating: Reduces visibility and sound, making it harder to detect."
      ],
      base_abilities: [
        "Navigate Terrain: Efficiently moves across different types of terrain.",
        "Basic Self-Repair: Can fix minor damage to itself using integrated nanites.",
        "Programmable Pathfinding: Can be programmed with a path or to follow specific targets."
      ],
      available_modules: [
        {
          name: "Explosive Module",
          description:
            "A payload of explosive material designed to detonate upon reaching a specified target.",
          effect:
            "Causes a powerful explosion, dealing massive damage in a 10-meter radius.",
          usage:
            "Attach and program the spider to locate and move to the closest specified creature/target before detonating.",
          materials: [
            "Explosive Core",
            "Trigger Mechanism",
            "Reinforced Casing"
          ]
        },
        {
          name: "Alarm Module",
          description:
            "Emits a loud, piercing sound to draw attention and cause a distraction.",
          effect:
            "Creates a 100-decibel alarm noise, drawing nearby creatures to its location.",
          usage:
            "Send the spider to a designated location to cause a distraction.",
          materials: ["Sonic Emitter", "High-Volume Speaker", "Signal Receiver"]
        },
        {
          name: "Scrying Module",
          description:
            "Equipped with a crystal eye and recording devices to gather and transmit information.",
          effect:
            "Records and transmits visual and auditory data back to the user in real-time.",
          usage:
            "Program a path for the spider to take, using it as a scout for reconnaissance missions.",
          materials: ["Crystal Eye", "Audio Recorder", "Signal Transmitter"]
        },
        {
          name: "Toxin Module",
          description:
            "Contains a reservoir of potent toxins that can be delivered to a target.",
          effect:
            "Injects a debilitating toxin into the target, causing paralysis or severe damage over time.",
          usage:
            "Program the spider to seek out and inject the toxin into a specific target.",
          materials: [
            "Toxin Reservoir",
            "Injector Fangs",
            "Corrosive Resistant Plating"
          ]
        },
        {
          name: "Repair Module",
          description:
            "Carries tools and materials for repairing mechanical and electrical devices.",
          effect: "Provides field repairs to damaged machinery and constructs.",
          usage:
            "Send the spider to a damaged device or construct to perform repairs.",
          materials: [
            "Miniature Tool Set",
            "Repair Nanites",
            "Multi-Material Patches"
          ]
        }
      ],
      restrictions: [
        "Programming Location: Must be programmed at a secure, stable location such as a workshop or a well-established camp. Attempting to program it in the field increases the risk of malfunction.",
        "Activation Timing: Once activated, the automaton cannot be recalled until it has completed its assigned task. Ensure it is programmed correctly before deployment.",
        "Module Compatibility: Only one module can be attached at a time. Ensure the correct module is used for the desired task."
      ],
      warnings: [
        "Self-Destruct Protocol: If the automaton is critically damaged, it will self-destruct to prevent enemy capture. Handle with care.",
        "Limited Recall: The automaton cannot be manually recalled once deployed. Plan its mission carefully to avoid unintended consequences.",
        "Interference Risk: Strong magical fields or anti-technology zones can disrupt the automaton's programming and functionality. Avoid deploying in such areas."
      ],
      usage_instructions: [
        "Attach Module: Choose the desired module and attach it to the Modular Spider Automaton using the attachment points.",
        "Program Task: Use the provided control interface to program the spider's path or designate a specific target/creature for it to interact with.",
        "Deploy: Activate the spider and deploy it to carry out the programmed task. The spider will autonomously execute the task based on the module attached.",
        "Monitor (if applicable): For modules like the Scrying Module, monitor the spider's progress and gathered data in real-time using the linked control interface."
      ]
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  populateTabs(data);
  document.querySelector(".tablink").click(); // Automatically click the first tab to show its content
});

function populateTabs(data) {
  const categories = [
    "Weapons",
    "Armor",
    "Consumables",
    "Potions",
    "Miscellaneous",
    "Spells",
    "Automatons"
  ];

  categories.forEach((category) => {
    const tab = document.getElementById(category);
    const items = data[category.toLowerCase()];
    const container = document.createElement("div");
    container.classList.add("card-container");

    items.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
        if (card.classList.contains("flipped")) {
          card.style.height = "auto";
        } else {
          card.style.height = "200px";
        }
      });

      const cardInner = document.createElement("div");
      cardInner.classList.add("card-inner");

      const cardFront = document.createElement("div");
      cardFront.classList.add("card-front");
      cardFront.innerText = item.name;

      const cardBack = document.createElement("div");
      cardBack.classList.add("card-back");

      if (category === "Spells") {
        cardBack.innerHTML = `
                    <div class="spell-details"><strong>Spell Name:</strong> ${item.name}</div>
                    <div class="spell-details"><strong>Mana Cost:</strong> ${item.mana_cost}</div>
                    <div class="spell-details"><strong>Effect:</strong> ${item.effect}</div>
                    <div class="spell-details"><strong>Range:</strong> ${item.range}</div>
                    <div class="spell-details"><strong>Duration:</strong> ${item.duration}</div>
                `;
      } else if (category === "Automatons") {
        cardBack.innerHTML = `
    <div class="automaton-details">
      <strong>Name:</strong> ${item.name}
    </div>
    
    <div class="automaton-details">
      <strong>Type:</strong> ${item.type}
    </div>
    
    <div class="automaton-details">
      <strong>Rarity:</strong> ${item.rarity}
    </div>
    
    <div class="automaton-details">
      <strong>Description:</strong> ${item.description}
    </div>
    
    <div class="automaton-details">
      <strong>Base Components:</strong><br>${item.base_components.join("<br>")}
    </div>
    
    <div class="automaton-details">
      <strong>Base Abilities:</strong><br>${item.base_abilities.join("<br>")}
    </div>
    
    <div class="automaton-details">
      <strong>Available Modules:</strong><br>${item.available_modules
        .map(
          (module) => `
        <div>
          <strong>${module.name}</strong><br>
          
          <strong>Description:</strong> ${module.description}<br>
          
          <strong>Effect:</strong> ${module.effect}<br>
          
          <strong>Usage:</strong> ${module.usage}<br>
          
          <strong>Materials:</strong> ${module.materials.join(", ")}
        </div>
      `
        )
        .join("")}
    </div>
    
    <div class="automaton-details">
      <strong>Restrictions:</strong><br>${item.restrictions.join("<br>")}
    </div>
    
    <div class="automaton-details">
      <strong>Warnings:</strong><br>${item.warnings.join("<br>")}
    </div>
    
    <div class="automaton-details">
      <strong>Usage Instructions:</strong><br>${item.usage_instructions.join(
        "<br>"
      )}
    </div>
  `;
      } else {
        cardBack.innerText = item.details;
      }

      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      card.appendChild(cardInner);
      container.appendChild(card);
    });

    tab.appendChild(container);
  });
}

function openTab(event, categoryName) {
  const tabContents = document.querySelectorAll(".tabcontent");
  tabContents.forEach((tab) => {
    tab.style.display = "none";
  });
  document.getElementById(categoryName).style.display = "block";
  const tabLinks = document.querySelectorAll(".tablink");
  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
}
