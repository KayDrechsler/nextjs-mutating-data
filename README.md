# Next.js - Mutating Data Exercise
A Next.js case study application where the app itself contains the data mutation code and reaches out directly to the data stores. Extra routes weren't used on purpose to test React server actions instead.

## Setup
In order to enable the image upload via cloudinary you'll need to setup your own `.env.local` file and store your own Cloudinary credentials in there:
```
CLOUDINARY_CLOUD_NAME='your cloud name'
CLOUDINARY_API_KEY='your api key'
CLOUDINARY_API_SECRET='your api secret'
```

## Used technologies
- React.js
- Next.js
- React Server Form Actions
- SQL
- Cloudinary

## Todos
- [ ] Delete inline styles that were just assigned for demo purposes.
- [ ] Remove CSS element selectors and replace them with classes.
- [ ] Install image optimization packages.