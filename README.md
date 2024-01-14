# Description

The backend of getting OSM data.

## Tecnologies

- NodeJS 18.12.1
- NPM 8.19.2
- Yarn 1.22.19
- MongoDB 6.0.4 Community
- [OpenStreetMap](https://www.openstreetmap.org)
- [Nominatim](https://nominatim.org/)

## Development

### Install

```bash
yarn install
```

#### Start server

```bash
yarn start
```

## Message error

- `200 Request` - ok
- `400 Bad Request` - for invalid input

## Response

- Example:

```json
{
  "success": true
}
```

### Testing

#### With jest

- [Oficial site](https://jestjs.io/)
- [Documentation](https://jestjs.io/docs/en/getting-started)
- [API](https://jestjs.io/docs/en/api)
- [Expect](https://jestjs.io/docs/en/expect)

##### All test

```bash
yarn test
```

or

```bash
yarn --watchAll
```

##### Individual test

```bash
yarn test api.main.test.js
```

### Code Quality

#### Sonarqube

- [Oficial site](https://www.sonarqube.org/)

##### Install

###### With docker

```bash
docker pull sonarqube
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
```

###### Web access

```bash
http://localhost:9000
```

####### Default credencials

- User: admin
- Password: admin

##### Use with docker

```bash
docker pull newtmitch/sonar-scanner

```

###### GNU-Linux/MacOS

Executing

```bash
docker run -ti -v /home/proyectosbeta/development/get-osm-data-backend:/usr/src --link sonarqube newtmitch/sonar-scanner
```

## Production

### Build

```bash
yarn build
```

Use pm2

### Install

```bash
yarn global add pm2
```

### Use

#### Start an app

```bash
pm2 start /home/proyectosbeta/repositoriosGit/get-osm-data-backend/dist/bundle.js --name get-osm-data-backend
```

#### Managing processes

##### Restart

```bash
pm2 restart get-osm-data-backend
```

##### Reload

```bash
pm2 reload get-osm-data-backend
```

#### Stop

```bash
pm2 stop get-osm-data-backend
```

##### Delete

```bash
pm2 delete get-osm-data-backend
```

#### List managed applications

```bash
pm2 list
```

#### Display logs

```bash
pm2 logs
```

#### Terminal Based Dashboard

```bash
pm2 monit
```

### Cluster mode

For Node.js applications, PM2 includes an automatic load balancer that will share all HTTP[s]/Websocket/TCP/UDP connections between each spawned processes.

```bash
pm2 start app.bundle.js --name get-osm-data-backend -i max
```

### Setup startup script

```bash
pm2 startup
```

Using the API

```bash
https://api-osmparaguay-data.proyectosbeta.net/api/location/v1/reverse/-57.45574951171876/-25.2918878849706
```
