// Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.


async function delayedlog(messages,delay){
    await new Promise(resolve=>setTimeout(resolve,delay))
    console.log(messages)

}
delayedlog(" my name is mary Apiu",2000)
// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
// 
// }
async function fetchUserDataSequentially(userIds) {
  for (const id of userIds) {
    try {
      const userData = await getUserData(id);
      console.log(userData);
    } catch (error) {
      console.error(`Error fetching user data for user ID ${id}:`, error);
    }
  }
}
const userIds = [1, 2, 3, 4, 5];
fetchUserDataSequentially(userIds)
  .then(() => console.log('All user data fetched successfully'))
  .catch(error => console.error('Error fetching user data:', error));
//   You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.


async function performTask() {
    let success = true;
    let promise = new Promise((resolve, reject) => {
      if (success) {
        resolve("custom message success");
      } else {
        reject("custom error message");
      }
    })
      .catch((error) => {
        console.log("error caught:", error);
      })
      .finally(() => {
        console.log("completed");
      });
    
    console.log({ promise });
  }
  
  performTask();

