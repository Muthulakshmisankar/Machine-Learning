export  const syllabus = [ 
{
    id:'1',
    menu: 'Introduction to Machine Learning',
    submenu: [
        {
            sid: '1A',
            sname: ' Definition and types of machine learning'
        },
        {
            sid: '1B',
            sname: 'Applications of machine learning'
        },
        {
            sid: '1C',
            sname: 'Supervised, unsupervised, and reinforcement learning'
        }
    ]
},
 
{
    id:'2',
    menu: 'Linear Regression',
    submenu: [
        {
            sid: '2A',
            sname: ' Simple and multiple linear regression'
        },
        {
            sid: '2B',
            sname: 'Assumptions and evaluation metrics'
        },
        {
            sid: '2C',
            sname: 'Regularization techniques (L1 and L2)'
        }
    ]
},
  
{
    id:'3',
    menu: 'Logistic Regression',
    submenu: [
        {
            sid: '3A',
            sname: ' Sigmoid function and logistic loss'
        },
        {
            sid: '3B',
            sname: 'Multinomial and ordinal logistic regression'
        },
        {
            sid: '3C',
            sname: 'Regularization techniques'
        }
    ]
},
{
    id:'4',
    menu: 'Decision Trees and Random Forest',
    submenu: [
        {
            sid: '4A',
            sname: ' Entropy, information gain, and gini index'
        },
        {
            sid: '4B',
            sname: 'Bagging and random subspace method'
        },
        {
            sid: '4C',
            sname: 'Hyperparameter tuning and feature importance'
        }
    ]
},
{
    id:'5',
    menu: ' Support Vector Machines (SVMs)',
    submenu: [
        {
            sid: '5A',
            sname: 'Linear and non-linear SVM'
        },
        {
            sid: '5B',
            sname: ' Kernel trick and kernel functions'
        },
        {
            sid: '5C',
            sname: ' Regularization and optimization'
        }
    ]
},
{
    id:'6',
    menu: '  k-Nearest Neighbors (k-NN)',
    submenu: [
        {
            sid: '6A',
            sname: 'Distance metrics and similarity measures'
        },
        {
            sid: '6B',
            sname: ' Hyperparameter tuning and feature scaling'
        },
        {
            sid: '6C',
            sname: 'Pros and cons of k-NN'
        }
    ]
},

{
    id:'7',
    menu: 'Naive Bayes',
    submenu: [
        {
            sid: '7A',
            sname: 'Bayes theorem and conditional probability'
        },
        {
            sid: '7B',
            sname: 'Gaussian and multinomial naive bayes'
        },
        {
            sid: '7C',
            sname: 'Text classification and sentiment analysis'
        }
    ]
},
{
    id:'8',
    menu: 'Neural Networks',
    submenu: [
        {
            sid: '8A',
            sname: 'Artificial neurons and activation functions'
        },
        {
            sid: '8B',
            sname: 'Multi-layer perceptron (MLP) and backpropagation'
        },
        {
            sid: '8C',
            sname: 'Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN)'
        }
    ]
},
{
    id:'9',
    menu: 'Clustering',
    submenu: [
        {
            sid: '9A',
            sname: 'k-means, hierarchical and density-based clustering'
        },
        {
            sid: '9B',
            sname: 'Evaluation metrics and feature scaling'
        },
        {
            sid: '9C',
            sname: 'Applications of clustering'
        }
    ]
},
{
    id:'10',
    menu: ' Dimensionality Reduction',
    submenu: [
        {
            sid: '10A',
            sname: ' Principal Component Analysis (PCA)'
        },
        {
            sid: '10B',
            sname: 'Linear Discriminant Analysis (LDA)'
        },
        {
            sid: '10C',
            sname: 't-SNE and UMAP'
        }
    ]
},
{
    id:'11',
    menu: ' Ensemble Methods',
    submenu: [
        {
            sid: '11A',
            sname: ' Boosting and Bagging'
        },
        {
            sid: '11B',
            sname: 'Random Forest and Extra Trees'
        },
        {
            sid: '11C',
            sname: 'AdaBoost and Gradient Boosting'
        }
    ]
},
{
    id:'12',
    menu: 'Reinforcement Learning',
    submenu: [
        {
            sid: '12A',
            sname: 'Markov Decision Processes (MDPs)'
        },
        {
            sid: '12B',
            sname: ' Q-Learning and SARSA'
        },
        {
            sid: '12C',
            sname: ' Temporal Difference (TD) Learning'
        }
    ]
},
{
    id:'13',
    menu: 'Deep Learning',
    submenu: [
        {
            sid: '13A',
            sname: 'Introduction to deep learning'
        },
        {
            sid: '13B',
            sname: 'Artificial Neural Networks (ANN)'
        },
        {
            sid: '13C',
            sname: 'Convolutional Neural Networks (CNN)'
        },
        {
            sid: '13D',
            sname: 'Recurrent Neural Networks (RNN)'
        },
        {
            sid: '13E',
            sname: 'Autoencoders'
        },
        {
            sid: '13F',
            sname: 'GANs'
        }

    ]
},
{
    id:'14',
    menu: ' Applications of Machine Learning',
    submenu: [
        {
            sid: '14A',
            sname: 'Natural Language Processing (NLP)'
        },
        {
            sid: '14B',
            sname: 'Computer Vision'
        },
        {
            sid: '14C',
            sname: 'Recommender Systems'
        },
        {
            sid: '14D',
            sname: 'Anomaly Detection'
        }
    ]
},
{
    id:'15',
    menu: ' Tools and Frameworks',
    submenu: [
        {
            sid: '15A',
            sname: ' Overview of popular machine learning libraries and frameworks'
        },
        {
            sid: '15B',
            sname: 'TensorFlow, Keras, PyTorch, and scikit-learn'
        },
        {
            sid: '15C',
            sname: ' Cloud-based machine learning platforms'
        }
       
    ]
},
]

export const contentText = [
    {
        cid: '1',
        title:'Introduction to Machine Learning',
        content: `
        <p></p>
        <p><strong>Machine learning</strong> is a field of computer science that uses statistical techniques to enable computers to learn and improve from experience without being explicitly programmed. The main goal of machine learning is to develop algorithms and models that can automatically identify patterns and make predictions or decisions based on input data. There are various types of machine learning, including supervised learning, unsupervised learning, semi-supervised learning, and reinforcement learning.</p>
        <p >Imagine you are a farmer and you have been planting crops for many years. Over time, you have learned the ideal conditions for planting and growing various crops, such as the right amount of sunlight, water, and soil nutrients. You have also learned which pests and diseases are common in your area and how to control them.</p>
        <p >One day, you decide to automate your farming process. You want to create a system that can make decisions about planting and caring for crops based on the conditions in your field. You start by collecting data on the weather, soil quality, and pest outbreaks in your area over the past few years.</p>
        <p >This is where machine learning comes in. You use this data to train a machine learning model that can predict the ideal conditions for planting and growing crops based on past experiences. The model uses algorithms to identify patterns and relationships in the data and make predictions based on those patterns.</p>
        <p >For example, the model might predict that if the temperature is between 70 and 80 degrees and the soil moisture is between 40% and 60%, then it is the ideal time to plant a certain crop. The model can also predict the likelihood of pest outbreaks and suggest ways to control them based on past experiences.</p>
        <p>As the model is used over time, it continues to learn and improve its predictions. For example, if it makes a mistake and predicts the wrong time to plant, it can learn from this error and adjust its predictions in the future. This is how machine learning enables computers to learn and improve from experience, just like you did as a farmer.</p>
        <p >In this way, machine learning can be applied to a wide range of problems and industries, from agriculture to finance to healthcare. The goal is to use data to make predictions or decisions that can improve efficiency, accuracy, and overall outcomes.</p><br>
        <p></p>
        `
    },
{
    cid: '1A',
    title: 'Definition and types of machine learning',
    content: `
    <p><span>Machine learning</span> is a subfield of Artificial Intelligence (AI) that involves the development of algorithms and statistical models that enable machines to improve their performance on a task without explicit instructions.</p>
  <p>&nbsp;</p>
  <p><span>There are three main types of machine learning:</span></p>
  <p>&nbsp;</p>
  <ol type="1">
  <li value="1"><strong>Supervised Learning:</strong><span> In this type of learning, the algorithm is trained on a labeled dataset, where the correct output is provided for each input. The goal is to learn a function that maps inputs to outputs, and the algorithm can then use this function to make predictions on new, unseen data. Examples of supervised learning include linear regression and logistic regression.</span></li>
  </ol>
  <p>&nbsp;</p>
  <ol type="1">
  <li value="2"><strong>Unsupervised Learning:</strong><span> In this type of learning, the algorithm is trained on an unlabeled dataset. The goal is to find patterns or structure in the data, such as grouping similar observations together. Examples of unsupervised learning include k-means clustering and Principal Component Analysis (PCA).</span></li>
  </ol>
  <p>&nbsp;</p>
  <ol type="1">
  <li value="3"><strong>Reinforcement Learning:</strong><span> In this type of learning, the algorithm learns by interacting with its environment and receiving feedback in the form of rewards or penalties. The goal is to learn a policy that maximizes the cumulative reward over time. Examples of reinforcement learning include Q-Learning and SARSA.</span></li>
  </ol>`
},

{
    cid: '1B',
    title: 'Applications of Machine learning',
    content: `<p>Machine learning has a wide range of applications in various industries. Some of the most common applications include:</p>
    <ol type="1">
    <li value="1"><span>Image and speech recognition: Machine learning algorithms can be used to identify and classify images and speech, which is used in applications such as facial recognition, image search, and speech-to-text.</span></li>
    <li><span>Natural Language Processing (NLP): Machine learning algorithms can be used to process and understand human language, which is used in applications such as sentiment analysis, machine translation, and text summarization.</span></li>
    <li><span>Recommender Systems: Machine learning algorithms can be used to analyze user behavior and preferences and make personalized recommendations, which is used in applications such as movie and product recommendations.</span></li>
    <li><span>Predictive modeling: Machine learning algorithms can be used to make predictions about future events based on historical data, which is used in applications such as stock market prediction, fraud detection, and customer churn prediction.</span></li>
    <li><span>Anomaly detection: Machine learning algorithms can be used to detect abnormal or unusual behavior in data, which is used in applications such as network intrusion detection and credit card fraud detection.</span></li>
    <li><span>Robotics: Machine learning algorithms can be used to train robots to perform tasks, such as object detection and grasping, and allowing robots to adapt to new environments and scenarios.</span></li>
    <li><span>Healthcare: Machine learning algorithms can be used to analyze medical images and assist in the diagnosis of diseases, predict patient outcomes, and optimize treatment plans.</span></li>
    <li><span>Self-driving cars: Machine learning algorithms are used to train the self-driving car to recognise the traffic signals, pedestrians, obstacles and make decisions based on that.</span></li>
    </ol>
    <p>This is not an exhaustive list and machine learning is being used in many other fields as well like finance, marketing, energy and many more.</p>`
},
{
    cid: '1C',
    title: 'Supervised, Unsupervised, Reinforcement learning   ',
    content: `
    <div class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]">
<div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
<div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
<div class="flex flex-grow flex-col gap-3">
<div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
<div class="markdown prose w-full break-words dark:prose-invert light">
<p>Supervised learning is a type of machine learning where the algorithms are trained on labeled data, meaning the data includes both the inputs and the correct outputs. The goal is to learn a mapping from the input data to the correct output, so that the algorithm can then make predictions on new, unseen data. For example, in a supervised learning problem to classify images of animals, the algorithm would be trained on a labeled dataset of images of cats, dogs, horses, etc. with their corresponding labels, and then use this learned mapping to classify new images.</p>
<p>Unsupervised learning, on the other hand, is a type of machine learning where the algorithms are trained on unlabeled data. The goal is to find patterns and structure in the data without any prior knowledge of what the correct output should be. For example, in an unsupervised learning problem to cluster similar images, the algorithm would be trained on an unlabeled dataset of images, and then identify patterns in the images to group similar ones together.</p>
<p>Reinforcement learning is a type of machine learning where the algorithms learn by interacting with an environment and receiving feedback in the form of rewards or penalties. The goal is to learn a strategy that maximizes the reward over time. For example, in a reinforcement learning problem to train a robot to navigate through a maze, the algorithm would receive a reward for reaching the end of the maze and a penalty for hitting a wall. The algorithm would then adjust its strategy to find the best path through the maze to maximize the reward.</p>
<p>These are the three main types of machine learning, each with its own unique characteristics and applications. The choice of which type of machine learning to use depends on the nature of the problem and the available data.</p>
<p>&nbsp;</p>
</div>
</div>
</div>
<div class="flex justify-between">&nbsp;</div>
</div>
</div>
</div>

<p>Supervised learning is like a teacher guiding a student. The algorithm is provided with labeled training data, where the correct output is provided for each input. The algorithm then uses this training data to learn a function that maps inputs to outputs.</p>
<p>For example, imagine a company wants to develop a system that can automatically sort emails into different folders based on their content. They provide the algorithm with a dataset of labeled emails, where each email has been manually categorized into one of several folders such as "spam", "promotions", "personal", and "work-related". The algorithm learns from this labeled training data and can then use the learned function to automatically sort new incoming emails into the appropriate folder.</p>
<p>&nbsp;</p>
<p>Unsupervised learning is like a student exploring on their own. The algorithm is provided with an unlabeled dataset, and the goal is to find patterns or structure in the data. An example of unsupervised learning is clustering.</p>
<p>For example, a market researcher wants to understand customer behavior by analyzing purchase data from a retail store. They provide the algorithm with a dataset of customer transactions, but the data is unlabeled. The algorithm uses unsupervised learning to group customers into clusters based on their purchasing patterns. The researcher can then analyze these clusters to gain insights about customer behavior.</p>
<p>&nbsp;</p>
<p>Reinforcement learning is like a student learning through trial and error. The algorithm learns by interacting with its environment and receiving feedback in the form of rewards or penalties. The goal is to learn a policy that maximizes the cumulative reward over time.</p>
<p>For example, A game developer wants to train an AI agent to play a complex game. They provide the algorithm with the game environment, and the algorithm learns to play the game by experimenting with different actions and receiving rewards or penalties based on the game's rules. Over time, the algorithm learns to make better decisions and improves its performance in the game.</p>
    `
},
{
    cid: '2',
    title: 'Linear regression',
    content: `
    <p><span>Linear regression is a supervised learning algorithm that is used to predict a continuous target variable based on one or more independent variables (also known as features or predictors). The goal of linear regression is to find the line of best fit (also known as the regression line) that minimizes the difference between the predicted values and the actual values.</span></p>
<p><span>The basic equation for a simple linear regression model with one independent variable is: y = b0 + b1*x</span></p>
<p><span>where y is the target variable, x is the independent variable, b0 is the y-intercept, and b1 is the slope of the line. The values of b0 and b1 are the parameters of the model, and they are determined by the training data.</span></p>
<p><span>For multiple linear regression model with multiple independent variables the equation is : y = b0 + b1</span><span>x1 + b2</span><span>x2 + .... + bn*xn</span></p>
<p><span>Linear regression can be used for a wide range of applications, such as predicting stock prices, housing prices, and weather conditions. It's one of the basic and simple algorithm but it's useful in many applications. Linear regression can also be extended to handle more complex models, such as polynomial regression and logistic regression.</span></p>
<p><span>It's important to note that Linear Regression assumes that the relationship between the independent and dependent variables is linear and also it assumes the independence and equality of variance of the residuals.</span></p>
    `

},
{
    cid: '2A',
    title: 'Simple and multiple linear regression  ',
    content: `
    <p>Simple linear regression is a type of linear regression where the model has only one independent variable. The goal is to find the line of best fit (regression line) that describes the relationship between the independent variable (x) and the dependent variable (y).</p>
<p>For example, imagine a farmer wants to predict the yield of his crop based on the amount of fertilizer used. He collects data on the fertilizer usage (x) and crop yield (y) for several seasons. He can use simple linear regression to find the line of best fit that describes the relationship between fertilizer usage and crop yield. The line of best fit can then be used to predict the yield of the crop for a given amount of fertilizer.</p>
<p>Multiple linear regression is a type of linear regression where the model has more than one independent variable. The goal is still to find the line of best fit (regression line) that describes the relationship between the independent variables and the dependent variable.</p>
<p>For example, imagine a car company wants to predict the price of a used car based on its age, mileage, and condition. They collect data on the age, mileage, condition, and price of several used cars. They can use multiple linear regression to find the line of best fit that describes the relationship between the independent variables (age, mileage, and condition) and the dependent variable (price). The line of best fit can then be used to predict the price of a used car based on its age, mileage, and condition.</p>
<p>Multiple linear regression can handle more complex relationships between the independent and dependent variables and can also help to identify which independent variables have the most impact on the dependent variable. It's important to note that, like simple linear regression, multiple linear regression also assumes that the relationship between the independent and dependent variables is linear.</p>
<p>&nbsp;</p>
    `
},
{
    cid: '2B',
    content: ``
},
{
    cid: '2C',
    content: ``
},
{
    cid: '2D',
    content: ``
}

]