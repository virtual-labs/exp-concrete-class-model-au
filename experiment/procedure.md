### Procedure

Consider a use case of the car rental application as follows:

- **Use Case Name:**  Release a Vehicle (to a customer)
- **Description:** A customer arrives to acquire the vehicle and depart for desired destination. The vehicle reservation contract is signed and the vehicle is released to the customer.
- 	**Actors:** Front-Desk Clerk, Customer

-	**Basic Flow ("Sunny Day Scenario"):** 
    1.     A customer comes to the office to acquire a vehicle.
    2.     The clerk locates the vehicle reservation contract by means of the reservation number and/or customer name. [Exception: Required vehicle type is not available due to late arrivals.]
    3. The customer signs the contract and the clerk gives the keys to the vehicle.
    4.  The clerk then marks the contract active by entering the vehicle release date (today's date) onto the vehicle reservation contract. The use case terminates at this point.
- 	**Exceptions ("Rainy Day Scenario"):**
 
    1.	Required vehicle type is not available due to late arrivals:
    2.	Raised when the reserved vehicle is not available due to late returns. The customer is informed of the situation and told about the other vehicle types that are available. The customer is offered an incentive to accept another vehicle type. If the customer is not satisfied, the reservation is cancelled without penalty charges. The customer either accepts another vehicle type or cancels the reservation.

- 	**Postconditions:** The customer departs with the vehicle and the reservation contract is marked active, or the reservation is cancelled.
-	**Stakeholder:** Reservation department

Experiment 1 recap: Use case was completed. Noun phrases and conceptual classes were identified, and the domain object model was constructed.

Experiment 2 recap: The verb phrases were identified and the method invocation between the objects were ordered to construct the time sequence model.

Experiment 3 recap: The datatype of attributes and the signature of the methods were identified for every class. The relationship between classes was defined to construct the class diagram.

Now, the steps to implement the conceptual class Customer is as follows:

Step 1: Complete the class diagram for the customer based on the following rules 

    1.	The customerID is set by the default constructor as the customer count and it is mandatory field. It cannot be set by the user.
    2. 	The customer objects are constructed with mandatory requirement as customerName with email and/or phone number.
    3.	The phone number should be a 10-digit positive number. If the user provides invalid phone number, then set phone number with a default number maximum value of integer.
    4. 	The customerName field cannot be updated after creation.
    5. 	The fields like email, phone and city allows read and write even after object creation.


Step 2: Implement the conceptual class Customer in Java following the instructions (supplied as comments).

Step 3: The TestDriver class creates a customer array with 3 objects. Customer objects are created with the availability of only email, then only phone and last customer with both email and phone number.  The city of the first two customers is Coimbatore and remaining customers is Chennai. Execute the TestDriver class.
Output: Execution of the TestDriver code is shown as stack-heap view.

Note: Work on the experiments sequentially.




