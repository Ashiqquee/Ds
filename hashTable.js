//-----------Simple and without collision-----------//

class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    insert(key, value) {
        const index = this._hash(key);
        this.table[index] = { key, value };
    }

    lookup(key) {
        const index = this._hash(key);
        const entry = this.table[index];
        if (entry && entry.key === key) {
            return entry.value;
        }
        return undefined;
    }

    delete(key) {
        const index = this._hash(key);
        if (this.table[index] && this.table[index].key === key) {
            this.table[index] = null;
        }
    }
}


const hashtable = new HashTable();

hashtable.insert("name", "Ashique");
hashtable.insert("age", 340);

console.log(hashtable.lookup("name")); 
console.log(hashtable.lookup("age")); 

hashtable.delete("age");
console.log(hashtable.lookup("age"));  



//-----------Simple and with collision-----------//

class Collision {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    insert(key, value) {
        const index = this._hash(key);
        this.table[index].push({ key, value });
    }

    lookup(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        for (const entry of bucket) {
            if (entry.key === key) {
                return entry.value;
            }
        }
        return undefined;
    }

    delete(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}


const collision = new Collision();

collision.insert("name", "Ashique");
collision.insert("age", 340);

console.log(collision.lookup("name"));
console.log(collision.lookup("age"));

collision.delete("age");
console.log(collision.lookup("age"));  
