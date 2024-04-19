# Backend roadmap

## Database structure

**User Table:** Stores information about each user.
- user_id (Primary Key)
- Other user-related information (e.g., name, email, etc.)

**Product Table:** Stores information about each product available on the integrated platform.
- product_id (Primary Key)
- product_name
- Other product-related information (e.g., description, category, etc.)
  
**Watchlist Table:** Stores the relationship between users and the products they are watching.
- watchlist_id (Primary Key)
- user_id (Foreign Key referencing User Table)
- product_id (Foreign Key referencing Product Table)
- Timestamps for when the product was added to the watchlist (optional)

**Availability Log Table:** Store historical availability updates for each product.
- availability_log_id (Primary Key)
- product_id (Foreign Key referencing Product Table)
- availability_status (e.g., available, out of stock)
- Timestamp of the availability update