# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_20_032719) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "client_emails", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.string "email", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id", "email"], name: "index_client_emails_on_client_id_and_email", unique: true
    t.index ["client_id"], name: "index_client_emails_on_client_id"
    t.index ["email"], name: "index_client_emails_on_email"
  end

  create_table "client_locations", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_client_locations_on_client_id"
    t.index ["location_id"], name: "index_client_locations_on_location_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "slug", null: false
    t.index ["slug"], name: "index_clients_on_slug", unique: true
  end

  create_table "currencies", force: :cascade do |t|
    t.string "name"
    t.string "abbreviation", null: false
    t.string "symbol", default: "$"
    t.float "min_size", default: 0.01
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["abbreviation"], name: "index_currencies_on_abbreviation", unique: true
  end

  create_table "invoice_items", force: :cascade do |t|
    t.bigint "invoice_id", null: false
    t.bigint "item_id", null: false
    t.float "quantity"
    t.float "fixed_unit_price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "currency_id"
    t.float "total_price"
    t.index ["currency_id"], name: "index_invoice_items_on_currency_id"
    t.index ["invoice_id"], name: "index_invoice_items_on_invoice_id"
    t.index ["item_id"], name: "index_invoice_items_on_item_id"
  end

  create_table "invoices", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "client_id"
    t.string "uuid"
    t.string "name"
    t.datetime "issue_date"
    t.datetime "due_date"
    t.float "total_price"
    t.integer "status", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "currency_id"
    t.bigint "user_location_id", null: false
    t.bigint "client_location_id", null: false
    t.bigint "client_email_id", null: false
    t.index ["client_email_id"], name: "index_invoices_on_client_email_id"
    t.index ["client_id"], name: "index_invoices_on_client_id"
    t.index ["client_location_id"], name: "index_invoices_on_client_location_id"
    t.index ["currency_id"], name: "index_invoices_on_currency_id"
    t.index ["user_id"], name: "index_invoices_on_user_id"
    t.index ["user_location_id"], name: "index_invoices_on_user_location_id"
    t.index ["uuid", "client_id"], name: "index_invoices_on_uuid_and_client_id"
    t.index ["uuid", "user_id", "client_id"], name: "index_invoices_on_uuid_and_user_id_and_client_id", unique: true
    t.index ["uuid", "user_id"], name: "index_invoices_on_uuid_and_user_id"
    t.index ["uuid"], name: "index_invoices_on_uuid"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.float "standard_unit_price"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "currency_id"
    t.index ["currency_id"], name: "index_items_on_currency_id"
    t.index ["name", "user_id"], name: "index_items_on_name_and_user_id", unique: true
    t.index ["user_id"], name: "index_items_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "postcode"
    t.string "street_address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_clients", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_user_clients_on_client_id"
    t.index ["user_id"], name: "index_user_clients_on_user_id"
  end

  create_table "user_locations", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_user_locations_on_location_id"
    t.index ["user_id"], name: "index_user_locations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "client_emails", "clients"
  add_foreign_key "client_locations", "clients"
  add_foreign_key "client_locations", "locations"
  add_foreign_key "invoice_items", "currencies"
  add_foreign_key "invoice_items", "invoices"
  add_foreign_key "invoice_items", "items"
  add_foreign_key "invoices", "client_emails"
  add_foreign_key "invoices", "client_locations"
  add_foreign_key "invoices", "clients"
  add_foreign_key "invoices", "currencies"
  add_foreign_key "invoices", "user_locations"
  add_foreign_key "invoices", "users"
  add_foreign_key "items", "currencies"
  add_foreign_key "items", "users"
  add_foreign_key "user_clients", "clients"
  add_foreign_key "user_clients", "users"
  add_foreign_key "user_locations", "locations"
  add_foreign_key "user_locations", "users"
end
