try {
  print('CREATING USER');
  db.createUser({
    user: 'myuser',
    pwd: 'mypassword',
    roles: [
      {
        role: 'readWrite',
        db: 'file-management',
      },
    ],
  });
} catch (error) {
  print(`Failed to create developer db user:\n${error}`);
}
