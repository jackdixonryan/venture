# Venture 
Build your Own Choose Your Own Adventure Game (BYOCYOAG) 

Greetings, you browser of GitHub, you. This is the source code for a project called the Venture. Venture is a framework for allowing you to quickly and easily build a choose-your-own-adventure game, or game world. The project is meant to facilitate all of the fun stuff I personally like to do in my free time, including: 

1. Fiction Writing and Consistency Management
2. DND Campaign Management
3. CYOA Games 
4. Interactive Fiction 

How does Venture facilitate such things? Well, I shall tell you. Shortly. 
## Why
I was attempting to dig out an older repository, Deepencrypt, the other day. My initial idea behind Deepencrypt was just to get a little Svelte experience by creating a complex website that held a skilling game a la Runescape. The idea is that a player would interact with a web portal as the game itself, and play as a digital archaeologist. I had some notion of making the project worthwhile by linking it to core concepts for understanding the web, though that never quite materialized. 
When I dug the repository up, I was immediately sidetracked by the thought that it would be really cool to have NPCs on the website with real stories - and that certain kinds of information, certain data packets, might be more valuable or rarer than others, and you could send NPCs emails or chat messages as a way of interacting... I still really like the idea, I think I'll still do it. But suddenly Deepencrypt took on a different tone, with a different set of development requirements. 
I would need to track what information players knew or did not know. I would need to use that information to contextualize conversations with NPCs. I would need to manage complicated branching in dialogues that would need to be programmatically extensible. I would not want to write a whole new conditional flow for every single interaction. I would need, in short, an engine running Deepencrypt from below. 
Then I thought, I've had these same problems in other places before. How am I, as a writer or a gamemaster or a programmer, meant to track: 
- what the player knows 
- who the characters are 
- what they know
- how they interact

Moving even higher in level, how could I track: 
- possession of items (inventory) 
- possible gamepaths
- locations
- world events 
Boy, this was getting complicated. But I do have a passion for this kind of rich storytelling. I love telling difficult stories with a lot of complexity. I love playing games where the world feels rich and complete. I love discovering something I reckon no other player has seen. I love the freedom of DND, the intricacy of fiction, and the complex world-building of video games. 
We need a tool, my friends. How are we supposed to keep tracking these rich worlds? Not all of us can be Matthew Mercer or Brendan Lee Mulligan. Some of us have wee little brains that only hold so much information at a time. What if instead of all that we could just 
## How
```javascript
const world = new World({ name: "My World" }); 
const { Managers } = world;
const { ItemManager, CharacterManager, StoryManager, LocationManager } = world; 

LocationManager.list_characters_at_location("freezy docks"); 
  -> { id: "guid", name: "archetypal charon" }
CharacterManager.list_story_roles(1);
  ->  [
        { story_id: "guid", dialogues: [ Dialogue_1, Dialogue_2 ] }  
      ]
CharacterManager.get_character_inventory(id); 
  -> [
        { item_id: "uuid", name: "weird necklace", true_name: "Vengeance of the Chthonic Gods" }
     ]
```
