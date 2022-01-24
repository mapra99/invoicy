class TestJob
  include Sidekiq::Job

  def perform(*_args)
    test_user = User.new(
      name: 'Sidekiq Test User',
      email: 'sidekiq@example.com',
      password: 'test-password',
      password_confirmation: 'test-password'
    )

    test_user.save!
  end
end
