This is an interview application built for [This Dot Labs](https://www.thisdot.co/)

Welcome to this sample application that leverages two configurable proxy API endpoints against [REST Countries API](https://restcountries.com/).

There are three components to this system (microservish)
- [React UI](https://thisdotco.onrender.com) - [code](https://github.com/Siliconrob/thisdotco)

The following components are on the **free hosted tier level** of [Render](https://render.com/) and are shutdown when not in use.  Accessing each component from a shutdown state requires it to spin back up and this can **delay requests for a minute or so**.

- [.NET API](https://calamansi.onrender.com) - [code](https://github.com/Siliconrob/calamansi) built with [ServiceStack](https://github.com/ServiceStack/ServiceStack)
- [FastAPI API](https://restful-with-more-fastapi.onrender.com) - [code](https://github.com/Siliconrob/render-native) built with [FastAPI](https://fastapi.tiangolo.com/)

## Proud of

**It has a map!!!**

## Highlight

Vite is great for making React apps, no more webpack tears

## Improvement

Rebuild out a new grid instead of using this one

## Demo use

![react_app](https://github.com/user-attachments/assets/a70b04f5-8156-498c-8799-7608b8f7c229)

## Flow

![thisdotco drawio](https://github.com/user-attachments/assets/f5acab1c-dc92-4223-aee4-b12804f1b662)

There are limited options on the user interface, but it is meant to show some React use and to work with the defined APIs.  There are input select options to choose from and a free text search field.  The next section is a JSON based grid component that renders the data returned from the API for exploring.  At the bottom is a display map that picks a random row from the returned results for a visual representation.

## Development

This project was built using the default Vite React template.

- Make sure to set all your [.env](https://www.baeldung.com/linux/environment-variables-file) variables.
- The `.env.example` file in this repository has the necessary keys you must fill out
- You will need to generate a free MapBox gljs API key [MapBox](https://docs.mapbox.com/mapbox-gl-js/guides/install/).
```
VITE_APP_MAPBOX_TOKEN=<Your MapBox API token> get one here https://account.mapbox.com/access-tokens/
VITE_APP_API_PYTHON_URL=<Url to Python FastAPI> clone this https://github.com/Siliconrob/render-native
VITE_APP_API_NET_URL=<Url to ServiceStack API> clone this https://github.com/Siliconrob/calamansi
``` 
- [Node.js](https://nodejs.org/en/about/) Please install at least Node.js version `v22.1.0` and `npm`.
- Run `npm install` to initialize all the dependencies

## Render Deployment

- Signup for a free [Render](https://dashboard.render.com/register) account.  You won't regret it :)
- Connect your [GitHub](https://docs.render.com/github) account
- Choose the `Static Site` [option](https://docs.render.com/static-sites)
- Setup a name
- Use the defaults and set the `Build Command` to `npm install; npm run build`
- Make sure to copy your data from your `.env` file you setup earlier into the `Environment` [settings](https://docs.render.com/configure-environment-variables)
- Trigger a manual deployment

### !!REMEMBER!!
- Make sure you setup your accompanying Python and .NET APIs

Example render setup
![image](https://github.com/user-attachments/assets/2203eaa5-c025-47eb-ae3a-d3c7fe1fe35a)

