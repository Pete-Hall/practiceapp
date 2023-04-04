-- This uses a Postgres database running on Postico

-- Create table in database
CREATE TABLE "rtkquery" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (1000),
    "flag" BOOLEAN,
    "comments" VARCHAR (1000)
);

-- Insert some test records into the table
INSERT INTO rtkquery ("description", "flag", "comments") VALUES ('Test 1 description', 'True', 'Test 1 comments');
INSERT INTO rtkquery ("description", "flag", "comments") VALUES ('Test 2 description', 'False', 'Test 2 comments');

-- CRUD tests
INSERT INTO rtkquery ("description", "flag", "comments") VALUES ('Test 3 description', 'False', 'Test 3 comments');
SELECT * FROM rtkquery ORDER BY id ASC;
UPDATE rtkquery SET flag=True WHERE id=3;
DELETE FROM rtkquery WHERE id=3;