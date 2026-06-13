# @n8n-dev/n8n-nodes-namsor

![namsor Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-namsor.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-namsor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing namsor API integrations by hand.**

Every time you connect n8n to namsor, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to namsor took 5 minutes, not half a day?**

This node gives you **7+ resources** out of the box: **Personal**, **Social**, **Chinese**, **Japanese**, **Indian**, and 2 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-namsor
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-namsor`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **namsor API** → paste your API key
3. Drag the **namsor** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Personal</b> (29 operations)</summary>

- Get USES 20 UNITS PER NAME COUPLE Infer several classifications for a cross border interaction between names ex remit travel intl com
- Post USES 20 UNITS PER NAME PAIR Infer several classifications for up to 100 cross border interaction between names ex remit travel intl com
- Get USES 10 UNITS PER NAME Infer the likely country of residence of a personal full name or one surname Assumes names as they are in the country of residence OR the country of origin
- Post USES 10 UNITS PER NAME Infer the likely country of residence of up to 100 personal full names or surnames Assumes names as they are in the country of residence OR the country of origin
- Get USES 20 UNITS PER NAME Infer the likely ethnicity diaspora of a personal name given a country of residence ISO2 code ex US CA AU NZ etc
- Post USES 20 UNITS PER NAME Infer the likely ethnicity diaspora of up to 100 personal names given a country of residence ISO2 code ex US CA AU NZ etc
- Get Infer the likely gender of a just a fiven name assuming default US local context Please use preferably full names and local geographic context for better accuracy
- Get Infer the likely gender of a name
- Post Infer the likely gender of up to 100 names detecting automatically the cultural context
- Get Infer the likely gender of a full name ex John H Smith
- Post Infer the likely gender of up to 100 full names detecting automatically the cultural context
- Get Infer the likely gender of a full name given a local context ISO2 country code
- Post Infer the likely gender of up to 100 full names with a given cultural context country ISO2 code
- Get Infer the likely gender of a name given a local context ISO2 country code
- Post Infer the likely gender of up to 100 names each given a local context ISO2 country code
- Get USES 10 UNITS PER NAME Infer the likely country of origin of a personal name Assumes names as they are in the country of origin For US CA AU NZ and other melting pots use diaspora instead
- Post USES 10 UNITS PER NAME Infer the likely country of origin of up to 100 names detecting automatically the cultural context
- Get Infer the likely first last name structure of a name ex John Smith or SMITH John or SMITH John
- Get Infer the likely first last name structure of a name ex John Smith or SMITH John or SMITH John For better accuracy provide a geographic context
- Post Infer the likely first last name structure of a name ex John Smith or SMITH John or SMITH John
- Post Infer the likely first last name structure of a name ex John Smith or SMITH John or SMITH John Giving a local context improves precision
- Get USES 10 UNITS PER NAME Infer the likely religion of a personal full name NB only for INDIA as of current version
- Post USES 10 UNITS PER NAME Infer the likely religion of up to 100 personal full names NB only for India as of currently
- Get USES 10 UNITS PER NAME Infer the likely origin of a name at a country subclassification level state or regeion Initially this is only supported for India ISO2 code IN
- Post USES 10 UNITS PER NAME Infer the likely origin of a list of up to 100 names at a country subclassification level state or regeion Initially this is only supported for India ISO2 code IN
- Get USES 10 UNITS PER NAME Infer a US resident s likely race ethnicity according to US Census taxonomy W NL white non latino HL hispano latino A asian non latino B NL black non latino Optionally add header X OPTION USRACEETHNICITY TAXONOMY USRACEETHNICITY 6CLASSES for two additional classes AI AN American Indian or Alaskan Native and PI Pacific Islander
- Post USES 10 UNITS PER NAME Infer up to 100 US resident s likely race ethnicity according to US Census taxonomy Output is W NL white non latino HL hispano latino A asian non latino B NL black non latino Optionally add header X OPTION USRACEETHNICITY TAXONOMY USRACEETHNICITY 6CLASSES for two additional classes AI AN American Indian or Alaskan Native and PI Pacific Islander
- Get USES 10 UNITS PER NAME Infer a US resident s likely race ethnicity according to US Census taxonomy using optional ZIP5 code info Output is W NL white non latino HL hispano latino A asian non latino B NL black non latino Optionally add header X OPTION USRACEETHNICITY TAXONOMY USRACEETHNICITY 6CLASSES for two additional classes AI AN American Indian or Alaskan Native and PI Pacific Islander
- Post USES 10 UNITS PER NAME Infer up to 100 US resident s likely race ethnicity according to US Census taxonomy with optional ZIP code Output is W NL white non latino HL hispano latino A asian non latino B NL black non latino Optionally add header X OPTION USRACEETHNICITY TAXONOMY USRACEETHNICITY 6CLASSES for two additional classes AI AN American Indian or Alaskan Native and PI Pacific Islander

</details>

<details>
<summary><b>Social</b> (5 operations)</summary>

- Get USES 11 UNITS PER NAME Infer the likely country and phone prefix given a personal name and formatted unformatted phone number
- Post USES 11 UNITS PER NAME Infer the likely country and phone prefix of up to 100 personal names detecting automatically the local context given a name and formatted unformatted phone number
- Get USES 11 UNITS PER NAME Infer the likely phone prefix given a personal name and formatted unformatted phone number with a local context ISO2 country of residence
- Post USES 11 UNITS PER NAME Infer the likely country and phone prefix of up to 100 personal names with a local context ISO2 country of residence
- Get CREDITS 1 UNIT Feedback loop to better infer the likely phone prefix given a personal name and formatted unformatted phone number with a local context ISO2 country of residence

</details>

<details>
<summary><b>Chinese</b> (14 operations)</summary>

- Get Identify Chinese name candidates based on the romanized name ex Wang Xiaoming
- Post Identify Chinese name candidates based on the romanized name firstName chineseGivenName lastName chineseSurname ex Wang Xiaoming
- Post Identify Chinese name candidates based on the romanized name firstName chineseGivenName lastName chineseSurname ex Wang Xiaoming
- Get Identify Chinese name candidates based on the romanized name ex Wang Xiaoming having a known gender male or female
- Get Return a score for matching Chinese name ex with a romanized name ex Wang Xiaoming
- Post Identify Chinese name candidates based on the romanized name firstName chineseGivenName lastName chineseSurname ex Wang Xiaoming
- Get Infer the likely gender of a Chinese full name ex
- Post Infer the likely gender of up to 100 full names ex
- Get Infer the likely gender of a Chinese name in LATIN Pinyin
- Post Infer the likely gender of up to 100 Chinese names in LATIN Pinyin
- Get Infer the likely first last name structure of a name ex surname given name
- Post Infer the likely first last name structure of a name ex surname given name
- Get Romanize the Chinese name to Pinyin ex Wang surname Xiaoming given name
- Post Romanize a list of Chinese name to Pinyin ex Wang surname Xiaoming given name

</details>

<details>
<summary><b>Japanese</b> (15 operations)</summary>

- Get Infer the likely gender of a Japanese name in LATIN Pinyin
- Post Infer the likely gender of up to 100 Japanese names in LATIN Pinyin
- Get Infer the likely gender of a Japanese full name ex
- Post Infer the likely gender of up to 100 full names
- Post Identify japanese name candidates in KANJI based on the romanized name firstName japaneseGivenName lastName japaneseSurname with KNOWN gender ex Yamamoto Sanae
- Get Identify japanese name candidates in KANJI based on the romanized name ex Yamamoto Sanae
- Get Identify japanese name candidates in KANJI based on the romanized name ex Yamamoto Sanae and a known gender
- Post Identify japanese name candidates in KANJI based on the romanized name firstName japaneseGivenName lastName japaneseSurname ex Yamamoto Sanae
- Get Romanize japanese name based on the name in Kanji
- Post Romanize japanese names based on the name in KANJI
- Get Return a score for matching Japanese name in KANJI ex with a romanized name ex Yamamoto Sanae
- Post Return a score for matching a list of Japanese names in KANJI ex with romanized names ex Yamamoto Sanae
- Get CREDITS 1 UNIT Feedback loop to better perform matching Japanese name in KANJI ex with a romanized name ex Yamamoto Sanae
- Get Infer the likely first last name structure of a name ex or Yamamoto Sanae
- Post Infer the likely first last name structure of a name ex or Yamamoto Sanae

</details>

<details>
<summary><b>Indian</b> (6 operations)</summary>

- Get USES 10 UNITS PER NAME Infer the likely Indian name castegroup of a personal full name
- Post USES 10 UNITS PER NAME Infer the likely Indian name castegroup of up to 100 personal full names
- Get USES 10 UNITS PER NAME Infer the likely religion of a personal Indian full name provided the Indian state or Union territory NB this can be inferred using the subclassification endpoint
- Post USES 10 UNITS PER NAME Infer the likely religion of up to 100 personal full Indian names provided the subclassification at State or Union territory level NB can be inferred using the subclassification endpoint
- Get USES 10 UNITS PER NAME Infer the likely Indian state of Union territory according to ISO 3166 2 IN based on the name
- Post USES 10 UNITS PER NAME Infer the likely Indian state of Union territory according to ISO 3166 2 IN based on a list of up to 100 names

</details>

<details>
<summary><b>Admin</b> (11 operations)</summary>

- Get Activate deactivate anonymization for a source
- Get Read API Key info
- Get List of classification services and usage cost in Units per classification default is 1 ONE Unit Some API endpoints ex Corridor combine multiple classifiers
- Get Prints the current status of the classifiers A classifier name in apiStatus corresponds to a service name in apiServices
- Get Print current API usage
- Get Print historical API usage
- Get Print historical API usage in an aggregated view by service by day hour min
- Get Activate deactivate learning from a source
- Get Print basic source statistics
- Get the current software version
- Get Print the taxonomy classes valid for the given classifier

</details>

<details>
<summary><b>General</b> (4 operations)</summary>

- Get Infer the likely type of a proper noun personal name brand name place name etc
- Post Infer the likely common type of up to 100 proper nouns personal name brand name place name etc
- Get Infer the likely type of a proper noun personal name brand name place name etc
- Post Infer the likely common type of up to 100 proper nouns personal name brand name place name etc

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from namsor docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official namsor OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **namsor** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the namsor API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
