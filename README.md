# PhishDetect AI

## Introduction

PhishDetect AI is a Chrome extension designed to detect phishing websites using a deep learning model. The model, developed with Python, TensorFlow, and Keras, is trained on a dataset comprising 10,000 phishing sites and 5,000 legitimate sites. The extension achieves a remarkable accuracy of 94.6% in predicting phishing sites. The frontend is built using TypeScript and Webpack, while the backend leverages FastAPI with Uvicorn and Node.js to facilitate communication between the trained model and the extension. All training data is stored in PocketBase.

## Features

- **High Accuracy**: The model predicts phishing sites with 94.6% accuracy.
- **Real-Time Detection**: Detects phishing sites as you browse the web.
- **User-Friendly Interface**: Provides clear visual indicators for safe, suspicious, and phishing sites.
- **FastAPI Backend**: Efficient communication between the Chrome extension and the trained model.
- **PocketBase Storage**: Secure storage for all training data.

## Technology Stack

- **Frontend**: TypeScript, Webpack
- **Backend**: FastAPI, Uvicorn, Node.js
- **Machine Learning**: Python, TensorFlow, Keras
- **Database**: PocketBase

## Installation

### Prerequisites

- Python 3.x
- Node.js
- Chrome Browser
- PocketBase

### Setting Up the Backend

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Monstub/PhishDetect-AI.git
   ```
2. Change the directory to `extension-model` add run `requirements.txt`:
   ```sh
   cd extension-model
   
   #Install Python Dependencies
   pip install -r requirements.txt
   ```

3. **Start the `Pocketbase` ans `FastAPI` Server** in two different powershell windows:
   ```sh
   #Starting Pocketbase server
   ./pocketbase serve

   #Starting FastAPI server
   uvicorn api.api:app --reload
   ```

### Setting Up the Chrome Extension

1. **Navigate to the Extension Directory**:
   ```sh
   cd ../extension-frontend
   ```

2. **Install Node.js Dependencies**:
   ```sh
   npm install
   ```

3. **Build the Extension**:
   ```sh
   npm run build
   ```

4. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` folder from the project directory

## Usage

1. **Start Browsing**: Once the extension is loaded, start browsing the web.
2. **Detection**: The extension will automatically detect phishing sites and provide visual feedback:
   - **Green**: Safe site
   - **Red**: Phishing site
   - **Yellow**: Suspicious site

## How It Works

1. **User Browses a Website**: The Chrome extension monitors the URL of the website.
2. **URL Sent to Backend**: The URL is sent to the FastAPI backend server.
3. **Prediction**: The backend server uses the trained deep learning model to predict if the site is phishing or legitimate.
4. **Feedback**: The prediction is sent back to the extension, which provides visual feedback to the user.

## Training the Model

1. **Data Collection**: The model is trained on 10,000 phishing sites and 5,000 legitimate sites.
2. **Model Training**: The training script (located in the `ai_model` directory) uses TensorFlow and Keras to train the model.
3. **Saving the Model**: The trained model is saved and loaded by the FastAPI server for predictions.

### Example Commands for Training

1. **Navigate to the Training Directory**:
   ```sh
   cd ai_model
   ```

2. **Run the Training Script**:
   ```sh
   python fraudulent_website_detector.py
   ```

## Tips for Running the Project Locally

- Ensure that both the FastAPI server and the Chrome extension are running simultaneously for proper communication.
- Regularly update the training dataset in PocketBase for better accuracy.
- Customize the visual feedback in the extension's `popup.html` and `popup.css` for a better user experience.

## Feedback

This project is aims to create a safe and secure web browsing experinece to everyone. Still if you got any queies or problems for this project, feel free to contact me on monstub7@gmail.com.
