'use strict';

/* eslint-disable quotes */
module.exports = `<a class="ez-domain-<%= self.domain.replace(/[.]/g, '_') %> ez-inline" target="_blank" href="<%- self.src %>" rel="nofollow"><%- self.meta.title %></a>`;
