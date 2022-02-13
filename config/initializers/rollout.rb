# frozen_string_literal: true

require 'redis'

$redis ||= Redis.new
$rollout = Rollout.new($redis)
