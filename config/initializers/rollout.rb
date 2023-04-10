# frozen_string_literal: true

require 'redis'

redis = Redis.new(url: ENV.fetch('REDIS_URL', 'redis://localhost:6379'))
$rollout = Rollout.new(redis)
