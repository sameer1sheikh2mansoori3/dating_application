# Dating Application

This is a dating application designed to connect people based on their interests and preferences. The application features a robust authentication system, route protection, user profile creation and updates, image upload for profiles, swipe right/left feature, real-time chat messaging, real-time notifications, and a matching algorithm.

## Features

* 🔐 Authentication System with JWT
* 🛡️ Route Protection
* 👤 User Profile Creation and Updates
* 🖼️ Image Upload for Profiles
* 🔄 Swipe Right/Left Feature
* 💬 Real-time Chat Messaging
* 🔔 Real-time Notifications
* 🤝 Matching Algorithm
* 📱 Responsive Mobile Design

## Installation

To install the application, follow these steps:

1. Clone the repository using the command:
```
git clone https://github.com/sameer1sheikh2mansoori3/dating_application.git
```
2. Navigate to the project directory:
```
cd dating_application
```
3. Create a `.env` file and add the following environment variables:
```
PORT=5000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_very_strong_secret>
NODE_ENV=development
CLIENT_URL=http://localhost:5173
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
```
4. Install the required dependencies:
```
npm install
```
5. Run the application:
```
npm start
```

## Usage

1. Open a web browser and navigate to `http://localhost:5000`.
2. Register or login to the application.
3. Fill out your profile information and preferences.
4. Search for matches based on your preferences.
5. View profiles and initiate conversations with potential matches.
6. Swipe right or left to like or dislike profiles.
7. Receive real-time notifications for new matches and messages.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Submit a pull request to the original repository.

## License

This project is licensed under the MIT License.

