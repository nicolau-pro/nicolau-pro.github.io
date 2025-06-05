const Sequelize = require("sequelize");
const sequelize = require("../db.cjs");

const Job = sequelize.define(
  "Job",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "companies",
        key: "id",
      },
      onDelete: "CASCADE",
    },

    title: { type: Sequelize.STRING, allowNull: false },

    dateFrom: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      comment: "Start date of the job (defaults to first of the month)",
    },
    dateTo: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      comment: "End date of the job (defaults to first of the month)",
    },

    description: { type: Sequelize.TEXT, allowNull: false },

    bulletpoints: {
      type: Sequelize.TEXT, // Store as JSON string
      allowNull: false,
      get() {
        const rawValue = this.getDataValue("bulletpoints");
        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        this.setDataValue("bulletpoints", JSON.stringify(value));
      },
    },

    tech: {
      type: Sequelize.TEXT, // Store as JSON string
      allowNull: false,
      get() {
        const rawValue = this.getDataValue("tech");
        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        this.setDataValue("tech", JSON.stringify(value));
      },
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: "jobs",
    timestamps: true,
  }
);

module.exports = Job;
