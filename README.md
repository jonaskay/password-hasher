# Password Hasher

Convert your password into a domain-specific password. Password Hasher is live at <https://password-hasher.herokuapp.com/>!

This project is a PWA implementation of [Remote PwdHash](https://crypto.stanford.edu/PwdHash/RemotePwdHash/). To learn more about web password hashing and Stanford PwdHash, check out <https://crypto.stanford.edu/PwdHash/>.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Getting Started

### Prerequisites

* Node.js
* Yarn

### Installing

Install package dependencies with Yarn:

```
yarn install
```

## Running Things Locally

Start the development server:

```
yarn start
```

Start the test runner:

```
yarn test
```

## Deploy with Heroku

Create a new Heroku app with a buildpack for create-react-app:

```
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
```

Push the code from local `master` branch to `heroku` remote:

```
git push heroku master
```

Open the app in your browser:

```
heroku open
```

## Acknowledgements

Big thanks to Stanford PwdHash's project staff: [Dan Boneh](http://www.stanford.edu/~dabo), [Collin Jackson](http://crypto.stanford.edu/~collinj), [John Mitchell](http://theory.stanford.edu/people/jcm/home.html), Nick Miyake, and [Blake Ross](http://www.blakeross.com/).
