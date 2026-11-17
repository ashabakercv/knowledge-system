import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as M from '../src/model.mjs';
const data=JSON.parse(readFileSync(new URL('../data/fixtures.json',import.meta.url),'utf8'));
test('retired guidance excluded',()=>assert.ok(M.searchArticles(data).every(x=>x.state!=='Retired')));test('search checks body and is case insensitive',()=>assert.ok(M.searchArticles(data,'DUPLICATE').length>=2));test('category and query combine',()=>assert.ok(M.searchArticles(data,'access','Access').every(x=>x.category==='Access')));test('overdue article remains visible with review flag',()=>assert.equal(M.searchArticles(data,'duplicate').find(x=>x.id==='KB-103').reviewDue,true));test('empty result is explicit',()=>assert.equal(M.searchArticles(data,'nonexistent-content-123').length,0));
