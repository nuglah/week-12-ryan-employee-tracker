class Department extends BaseEntity {
  constructor(dbConnection) {
    super(dbConnection);
  }
  findById(id) {
    return super.findById("id, name", "depratments", "id");
  }
}
