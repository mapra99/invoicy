module PaginationService
  class PaginateCollection
    include Interactor

    def call
      collection = context.collection
      limit = context.limit
      offset = context.offset

      context.paginated_collection = collection.limit(limit).offset(offset)
    end
  end
end
