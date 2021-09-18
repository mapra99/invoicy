RSpec.shared_examples 'paginated model' do
  context '#paginate' do
    let(:limit) { 10 }
    let(:offset) { 5 }
    let(:full_list) { subject.all }

    describe 'passing only a limit argument' do
      let(:paginated_list) { subject.all.paginate(limit) }

      it 'should return at most the limit of items' do
        expect(paginated_list.length).to be <= limit
      end

      it 'should return the first [limit] items' do
        expect(paginated_list).to eq(full_list[0...limit])
      end
    end

    describe 'passing both limit and offset' do
      let(:paginated_list) { subject.all.paginate(limit, offset) }

      it 'should return at most the limit of items' do
        expect(paginated_list.length).to be <= limit
      end

      it 'should return items strating by the offset-th element' do
        expect(paginated_list).to eq(full_list[offset...(offset + limit)])
      end
    end
  end
end
