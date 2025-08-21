## Blockchain like 

Your task is to create a blockchain like data structure in TypeScript.

The blockchain should have the following features:
1. Blockchain should initialize with genesis block
2. Blockchain should allow to add transactions
3. Blockchain should allow to get balance of user
4. Blockchain should have validate method to verify the integrity of the blockchain. In case of invalid block, it should throw an error with first block that interrupted the chain.
5. For simplicity store all data in memory.
6. For simplicity, there is no mining, just add block to chain for each transaction. (consider supporting multiple transactions in one block, for future) 
7. Each block should have a unique hash based on content of all blockchain content
8. Blockchain should emmit events for each transaction
9. Api of event emitter should allow to subscribe for specific user transactions(Received, Sent)
10. Each feature should have tests


## Tips
1. Your though process is same important as the code.
2. Ask questions, clarify requirements.
3. Explain your ideas, If you see any problems that may arise in the future with this code, please mention them. For example: how we can make getting balance of user scalable with 1_000_000 blocks?
