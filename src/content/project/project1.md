---
layout: ../../layouts/LayoutBlogPost.astro
title: "MiniBase"
description: "MiniBase is a versatile platform for managing miniatures, with potential for AI and RPG."
abstract: "MiniBase is an innovative tool designed for collectors and miniature creators. Its purpose is to provide a centralized platform for managing a database of miniatures, including visual details, metadata, and lore. With an intuitive interface and specialized modules, users can efficiently import, export, edit, and visualize their collections. Additionally, its modular design paves the way for future integrations with AI models, enabling automated lore generation, narrative assistants, and simulations in RPG environments. Interoperability with standard formats facilitates expansion and collaboration. MiniBase is more than just a database—it’s a bridge between traditional organization and the limitless possibilities of modern technology."
pubDate: 2025-04-08
category: "software"
id: 1
image: "/neural.gif"
slug: "minibase"

---

Technologies: Python and SQLite, frameworks such as Tkinter, Pandas, and Pillow

**MiniBase v1.0.0: Dynamic Management of Miniature Collectibles with Potential for AI and RPG.**

![home screen](screenshots/home_screen.png)

* **[ Here is the project code](https://github.com/blackars/MiniBase)**
* **[ & here an executable for Windows 10/11](https://github.com/blackars/MiniBase-Distro)**

The project begins with MiniBase, an innovative tool designed for collectors,creators, and miniature enthusiasts. Its primary goal is to provide a centralized platform for managing a database of miniatures, including visual details, metadata, and narrative and/or collectible lore. However, its modular and extensible design opens the door to future integrations with Artificial Intelligence models, making it an ideal solution for adding dynamism and depth to character collections in role-playing game (RPG) environments.

**Project Utility**

* Centralized Management: The application allows users to organize and maintain a detailed record of their miniatures, including physical attributes (such as weight, height, and colors) and narrative aspects (such as history and purpose within the user's or character's universe).

* Visualization and Organization: With the ability to upload images and detailed views, users can clearly and attractively visualize their miniatures, making it easier to organize large collections.

* Interoperability: The import and export functionality in formats such as JSON, Excel, and CSV allows data integration with other tools or platforms, making it ideal for collaborative projects or expansions.

* AI Readiness: The project's data structure is designed to be compatible with AI models. This means that, in the future, algorithms could be implemented to generate automatic descriptions, create dynamic stories, or even simulate character behaviors in RPG environments using Computer Vision tools.

* RPG Dynamism: By integrating lore and metadata, the database can serve as a key resource for Dungeon Masters or storytellers in a variety of role-playing games. Characters can be selected, customized, and used in campaigns, adding a unique level of immersion.

**System Operation** 

MiniBase is based on an intuitive graphical interface developed with Tkinter, which guides the user through the following main functionalities.

![home screen empty](screenshots/home_screen_empty.png)


**Miniature Creation**

Users can add new miniature to the database, specifying attributes such as name, tags, materials, colors, etc., all in the creation module (creation_module.py).

![creation module screen 1](screenshots/creation_module1.2.png)
![creation module screen 2](screenshots/creation_module2.3.png)
![creation module screen 3](screenshots/creation_module3.2.png)

**Data Importation**

The import module (importation_module.py) requires a unified table structure that is provided in the Excel template (template.xlsx) and is the only one currently that supports the MiniBase system for importing data, and from which the first collectibles management was born.

![importation module screen 1](screenshots/importation_module.png)
![importation module screen 2](screenshots/importation_module2.png)
![importation module screen 3](screenshots/importation_module3.png)

**Data Exportation** 

The export module (exportation_module.py) allows the entire database to be exported in three standard formats: CSV, JSON, and Excel File. This allows for use on other platforms or tools.

![exportation module screen 1](screenshots/exportation_module.png)

**Miniature Edition** 

Once the characters have been entered into the database, you can edit their details again, add missing ones, or replace images from the editing module (edition_module.py).

![edition module screen](screenshots/edition_module.png)
![edition module screen upload images](screenshots/edition_module2.png)

**Miniature Deletion**

The deletion module (deletion_module.py) currently only handles deleting the selected miniature from the database.

![deletion module screen 1](screenshots/deletion_module.png)
![deletion module screen 2](screenshots/deletion_module2.png)
![deletion module screen 3](screenshots/deletion_module3.png)

**Schema View**

Schema View Component: The schemaview_module.py allows visualization of the database tables created from the schema.sql file using the initialization module (initialize_db.py). It serves as a review tool to verify how data insertions are being made, the existing tables, and their relationships.

![schema view module](screenshots/schemaview_module.png)

**Upcoming AI integrations for RPGs**

Although it does not currently include AI models, the project's structure is designed to facilitate the future integration of algorithms that can analyze, enrich, or generate dynamic content based on the characters in miniatures database. The next step in MiniBase's evolution is its integration with AI models to enhance its functionality. Some ideas include:

* Automatic Lore Generation: Using language models, the application could generate unique stories for each gaming table, including attributes, scenes, settings, characters, and much more based on the user's collection.

* Narrative Assistants: AI could act as a game master assistant, suggesting events, dialogues, or challenges based on the selected miniatures. Additionally, with Computer Vision, it could recognize the scenery and miniatures in real time.

*  Behavior Simulation: Miniature data could feed real-time simulations, allowing characters to interact in RPG environments where the system could act as the game master or an interactive ruleset.


MiniBase is designed not only to be a useful tool for maintaining miniature collections but also to serve as a platform with immense potential to enrich gaming and narrative experiences. Through the integration of LLM for creation and storytelling, as well as Computer Vision models to further enhance RPG dynamics, MiniBase acts as a bridge between traditional organization and the endless possibilities of modern technology.
